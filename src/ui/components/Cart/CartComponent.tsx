"use client"
import { FC } from "react";
import { ICartProps } from "./types";
import { ICartItem } from "@/types/cart.types";
import { CartCard } from "./CardCart/CartCard";
import { ButtonWithText, Loader, MainTitle, Price } from "../common";
import { useDataUserCart } from "@/hooks/carts/useDataUserCart";
import { useRouter } from "next/navigation";
export const CartComponent: FC<ICartProps> = ({
    userID
}) => {
    const { cartData, totalPrice, isLoading } = useDataUserCart().useGetCartUser(userID as string);
    const { mutate: updatQuantityItem } = useDataUserCart().useUpdateProductsCart();
    const { mutate: deleteProduct } = useDataUserCart().useDeleteProductCart();
    const cartRouter = useRouter();
    const decreaseQuantityItem = (item: ICartItem) => {
        updatQuantityItem(item);
    }

    const increaseQuantityItem = (item: ICartItem) => {
        updatQuantityItem(item);
    }

    const removeItem = (productID: string) => {
        deleteProduct(productID);
    }

    const handleNexttoOrder = () => {
        cartRouter.push('/checkout/' + userID)
    }

    const handleContinueShopping = () => {
        cartRouter.push('/')
    }

    return (
        <div
            className={`
              w-full h-full relative 
              flex flex-col 
              md:px-8 px-2
            
            
            `}
        >
            <MainTitle text="Cart" />
            <div
                className={`
                        w-full h-10 
                        relative 
                        md:grid grid-cols-5
                        text-light-text dark:text-dark-text
                         md:text-lg text-xs 
                        font-semibold
                        md:visible hidden
                        px-2
                        gap-4 
                    `}
            >
                <h3 key="product" className="col-span-2 ">PRODUCT</h3>
                <h3 key="price" className="text-center col-span-1">PRICE</h3>
                <h3 key="quantity" className=" text-end col-span-1 pr-4">QUANTITY</h3>
                <h3 key="total" className="w-full col-span-1 text-end">TOTAL</h3>
            </div>
            <div className="w-full h-full relative" title="content">
                {isLoading
                    ?
                    <Loader />
                    :
                    <div className="w-full h-fit relative flex flex-col">
                        <div className="py-2 gap-4 flex flex-col">
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
                        </div>
                        <div
                            className={`
                            w-full h-fit relative 
                            grid 
                            md:grid-cols-5
                            grid-cols-1
                            text-light-text dark:text-dark-text
                            text-lg font-semibold 
                            `}
                        >
                            <span key="product" className="col-span-3 hidden md:visible md:flex"></span>
                            <div
                                className=" w-full md:col-span-2  flex flex-col gap-4"
                            >
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
                                <div className="w-full flex flex-row justify-between gap-4">
                                    <ButtonWithText
                                        key="continue shopping"
                                        onClick={handleContinueShopping}
                                        buttonSize="full"
                                        buttonVariant="transparent"
                                        textButton="Continue shopping"
                                    />
                                    <ButtonWithText
                                        key="checkout"
                                        onClick={handleNexttoOrder}
                                        buttonSize="full"
                                        buttonVariant="backgroundColor"
                                        textButton="Checkout"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>

        </div>
    )
}



