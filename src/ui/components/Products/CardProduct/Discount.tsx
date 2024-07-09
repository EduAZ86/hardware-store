import { FC } from "react";
import { IDiscountProps } from "./types";

export const Discount: FC<IDiscountProps> = ({
    discount
}) => {
    return (
        <div
            className={`
                w-16 h-8 
                absolute z-10 top-4 right-4
                flex flex-row items-center justify-center 
                bg-light-primary dark:bg-dark-primary
                rounded-md
            `}
        >
            <span
                className="text-base text-light-text dark:text-dark-text"
            >
                - {(discount * 100).toString()}%
            </span>
        </div>
    )
}