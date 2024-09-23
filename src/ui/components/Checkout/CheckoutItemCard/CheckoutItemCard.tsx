import { FC } from "react";
import { ICheckoutItemCardProps } from "./types";
import { Price } from "../../common";

export const CheckoutItemCard: FC<ICheckoutItemCardProps> = ({
    price,
    name,
    quantity
}) => {
    return (
        <div
            className={`
                w-full h-20
                 grid grid-cols-6
                 justify-between items-center 
                 text-light-text dark:text-dark-text
                 px-3
                 `
                }
        >
            <h4
                className="text-xs font-medium col-span-3"
            >
                {name}
            </h4>
            <h4
                className="text-sm font-medium col-span-1 content-center"
            >
                {quantity}
            </h4>
            <Price
                price={price.price}
            />
        </div>
    )
}