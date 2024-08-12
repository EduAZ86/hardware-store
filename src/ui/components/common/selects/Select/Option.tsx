import { FC } from "react";
import { IOptionProps } from "./types";

export const Option: FC<IOptionProps> = ({
    label,
    ...optionProps
}) => {
    return (
        <option
            {...optionProps}
            className={`
            text-sm cursor-pointer
            text-light-text dark:text-dark-text
            hover:bg-light-acent dark:hover:bg-dark-acent           
            `}
        >
            {label}
        </option>
    )
}