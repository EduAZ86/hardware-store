import { FC } from "react";
import { IPriceProps } from "./types";
import { priceFormatter } from "./priceFormater";
import { twJoin } from "tailwind-merge";

export const Price: FC<IPriceProps> = ({
    price,
    discount = 0
}) => {
    const promotionalPrice = price - price * discount;
    return (
        <div
            className={`
            w-full
            flex flex-row
            gap-3
            justify-start
            items-center
            relative
            `}
        >
            {discount !== 0 &&
                <span
                    className={`text-lg text-light-primary dark:text-dark-primary text-center`}
                >
                    $ {priceFormatter(promotionalPrice)}
                </span>}
            <span
                className={twJoin(
                    " text-light-text dark:text-dark-text text-center",
                    discount ? "line-through text-md opacity-50" : "text-lg opacity-100",
                )}
            >
                $ {priceFormatter(price)}
            </span>
        </div>
    )
}