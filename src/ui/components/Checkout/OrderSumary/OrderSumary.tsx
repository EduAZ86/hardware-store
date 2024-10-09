import { FC } from "react";
import { IOrderSummaryProps } from "./types";
import { Loader, Price } from "../../common";
import { CheckoutItemCard } from "../CheckoutItemCard/CheckoutItemCard";

export const OrderSumary: FC<IOrderSummaryProps> = ({
    isLoading,
    items,
    totalPrice
}) => {
    return (
        <div className="w-full h-full flex flex-col">
            {isLoading
                ?
                <Loader />
                :
                <div className="w-full h-full flex flex-col">
                    <h3 className="text-dark-text dark:text-light-text text-lg text-center pt-4">Order sumary</h3>
                    {items?.map((item) => (
                        <CheckoutItemCard
                            key={item.productID}
                            name={item.name}
                            quantity={item.quantity}
                            price={item.price}
                        />
                    ))}
                    <Price
                        price={totalPrice}
                    />
                </div>
            }
        </div>
    )
}