import { ICartResponse } from "@/types/cart.types";

export interface IUseUserCartStore {
    cartData: ICartResponse;
    totalPrice: number;
    setCartData: (cartData: ICartResponse) => void;
    increaseQuantityItem: (productID: string, stock: number) => void;
    decreaseQuantityItem: (productID: string) => void;
    removeItem: (productID: string) => void;
}