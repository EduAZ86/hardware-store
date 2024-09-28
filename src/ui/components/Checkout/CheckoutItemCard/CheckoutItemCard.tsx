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
                 pl-1
                 `
            }
        >
            <h4
                className="text-xs font-medium col-span-3"
            >
                {name}
            </h4>
            <h4
                className="text-sm font-medium col-span-1 w-full text-center"
            >
                {quantity}
            </h4>
            <div className="col-span-2 flex w-full relative flex-row justify-start">
                <Price
                    price={price.price}
                    size="sm"
                    orientation="right"
                />
            </div>
        </div>
    )
}