"use client"
import { FC, useEffect, useRef } from "react";
import { ICartProps } from "./types";
import { MainTitle, Price } from "../common";
import { CartCard } from "./CardCart/CartCard";
import { useUserCartStore } from "@/lib/store/usercart/useUserCartStore";
import { useDataUserCart } from "@/hooks/carts/useDataUserCart";
import { ICart } from "@/types/cart.types";
export const CartComponent: FC<ICartProps> = ({
    cartData,
    totalPrice
}) => {
    const {
        cartData: cartStore,
        setCartData,
        decreaseQuantityItem,
        increaseQuantityItem,
        removeItem
    } = useUserCartStore();

    const { mutate: updateCart } = useDataUserCart().useUpdateCart();

    const prevCartDataRef = useRef<ICart | null>(null);

    useEffect(() => {
        if (cartStore.items.length > 0) {
            const updatedCart: ICart = {
                userID: cartStore.userID,
                items: cartStore.items.map((item) => {
                    return {
                        productID: item.productID,
                        quantity: item.quantity
                    }
                })
            }
            if (prevCartDataRef.current && JSON.stringify(prevCartDataRef.current) !== JSON.stringify(updatedCart)) {
                updateCart(updatedCart);
            }
            prevCartDataRef.current = updatedCart;
        }
        if (cartData && cartStore.items.length === 0) {
            setCartData(cartData)
        }
    }, [cartStore])

    return (
        <div
            className={`
              w-full h-full min-h-screen flex flex-col px-4   
            `}
        >
            <MainTitle text="Cart" />
            <div
                className="w-full h-full py-2 gap-4 flex flex-col"
            >
                <div
                    className={`
                        w-full h-fit relative grid grid-cols-5
                        text-light-text dark:text-dark-text
                        text-lg font-semibold 
                    `}
                >
                    <h3 key="product" className="col-span-2">PRODUCT</h3>
                    <h3 key="price" className="col-span-1">PRICE</h3>
                    <h3 key="quantity" className="col-span-1">QUANTITY</h3>
                    <h3 key="total" className="col-span-1">TOTAL</h3>
                </div>
                {cartData && cartData?.items.map((item, index) => {
                    return (
                        <CartCard
                            quantity={item.quantity}
                            increaseItem={increaseQuantityItem}
                            decreaseItem={decreaseQuantityItem}
                            removeItem={removeItem}
                            userID={cartData.userID}
                            key={index}
                            item={item}
                        />
                    )
                })}
                <div
                    className={`
                        w-full h-fit relative grid grid-cols-5
                        text-light-text dark:text-dark-text
                        text-lg font-semibold 
                    `}
                >
                    <span key="product" className="col-span-3"></span>
                    <div key="price"
                        className={`
                            col-span-2
                            w-full h-20 
                            display flex flex-row 
                            justify-between items-center
                            gap-2 
                            rounded-md
                            px-4
                            overflow-hidden p-1
                            bg-light-acent dark:bg-dark-acent
                            
                            `}
                    >
                        <span className="w-1/2">Total</span>
                        {totalPrice && <div className="w-fit">
                            <Price price={totalPrice} />
                        </div>
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}