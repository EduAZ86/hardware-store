import { FC } from "react";
import { ICategoryProps } from "./types";

export const Category: FC<ICategoryProps> = ({ text }) => {
    return (
        <h4
            className={`
                text-xs text-start
                text-light-acent dark:text-dark-acent 
                tracking-wider uppercase
            `}
        >
            {text}
        </h4>
    )
}