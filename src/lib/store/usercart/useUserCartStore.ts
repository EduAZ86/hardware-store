import { create } from "zustand";
import { IUseUserCartStore } from "./types";
import { ICartItemResponse, ICartResponse } from "@/types/cart.types";

const initialCartData: ICartResponse = {
    userID: "",
    items: [],
    updatedAt: ""
}

export const useUserCartStore = create<IUseUserCartStore>((set) => ({
    cartData: initialCartData,
    totalPrice: 0,
    setCartData: (cartData: ICartResponse) => set((state) => ({
        cartData,
        totalPrice: cartData.items.reduce((total, item) => total + (item.price.price * item.quantity), 0)
    })),
    increaseQuantityItem: (productID: string, stock: number) =>
        set(
            (state) => {
                const updatedItems = state.cartData?.items.map((item) => {
                    if (item.productID === productID) {
                        const newQuantity = Math.min(item.quantity + 1, stock);
                        return { ...item, quantity: newQuantity };
                    }
                    return item;
                });
                return {
                    cartData: {
                        ...state.cartData, items: updatedItems,
                        totalPrice: updatedItems.reduce((total, item) => total + (item.price.price * item.quantity), 0)
                    }
                };
            }
        ),
    decreaseQuantityItem(productID) {
        set(
            (state) => {
                const updatedItems = state.cartData?.items.map((item) => {
                    if (item.productID === productID) {
                        const newQuantity = Math.max(item.quantity - 1, 0);
                        return { ...item, quantity: newQuantity };
                    }
                    return item;
                });
                return {
                    cartData: {
                        ...state.cartData, items: updatedItems
                    },
                    totalPrice: updatedItems.reduce((total, item) => total + (item.price.price * item.quantity), 0)
                };
            }
        )
    },
    removeItem(productID) {
        set(
            (state) => {
                const updatedItems = state.cartData?.items.filter((item) => item.productID !== productID);
                return {
                    cartData: { ...state.cartData, items: updatedItems },
                    totalPrice: updatedItems.reduce((total, item) => total + (item.price.price * item.quantity), 0)
                };
            }
        )
    },
}))