import { FC } from "react";
import { IInputSearchProps } from "./types";

export const InputSearch: FC<IInputSearchProps> = ({

}) => {
    return (
        <input
            className={
                `w-full h-full
                 bg-light-background dark:bg-dark-background border-l-2 px-2
                border-none
                text-light-text dark:text-dark-text
                focus:outline-none focus:ring-1 focus:ring-light-secondary dark:focus:ring-dark-secondary 
                `
            }
            placeholder="Search products"
            type="text"

        />
    )
}