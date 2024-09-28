import { FC } from "react";
import { IPriceProps } from "./types";
import { priceFormatter } from "./priceFormater";
import { twJoin } from "tailwind-merge";

export const Price: FC<IPriceProps> = ({
    price,
    discount = 0,
    size,
    orientation

}) => {
    const promotionalPrice = price - price * discount / 100;
    return (
        <div
            className={twJoin(
                "w-full flex flex-row gap-3 items-center relative font-semibold ",
                size === "sm" && "text-sm",
                size === "xl" && "text-xl",
                size === "3xl" && "text-3xl",
                orientation === "center" && "justify-center",
                orientation === "left" && "justify-start text-start", 
                orientation === "right" && "justify-end text-end",   
            )}

        >
            {discount !== 0 &&
                <span
                    className={`font-bold text-light-primary dark:text-dark-primary text-center`}
                >
                    {priceFormatter(promotionalPrice)}
                </span>}
            <span
                className={twJoin(
                    " text-light-text dark:text-dark-text text-center",
                    discount ? "line-through opacity-50" : "opacity-100",
                )}
            >
                {priceFormatter(price)}
            </span>
        </div>
    )
}