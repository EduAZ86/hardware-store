import { FC } from "react";
import { IPriceProps } from "./types";
import { priceFormatter } from "./priceFormater";
import { twJoin } from "tailwind-merge";

export const Price: FC<IPriceProps> = ({
    price,
    discount = 0,
    size

}) => {
    const promotionalPrice = price - price * discount / 100;
    return (
        <div
            className={twJoin(
                "w-full flex flex-row gap-3 justify-start items-center relative font-semibold px-3",
                size === "sm" && "text-sm",
                size === "xl" && "text-xl",
                size === "3xl" && "text-3xl",
            )}

        >
            {discount !== 0 &&
                <span
                    className={`font-bold text-light-primary dark:text-dark-primary text-center`}
                >
                    $ {priceFormatter(promotionalPrice)}
                </span>}
            <span
                className={twJoin(
                    " text-light-text dark:text-dark-text text-center",
                    discount ? "line-through opacity-50" : "opacity-100",
                )}
            >
                $ {priceFormatter(price)}
            </span>
        </div>
    )
}