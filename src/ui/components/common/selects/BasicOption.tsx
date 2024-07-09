import { FC } from "react";
import { IBasicOption } from "./types";

export const BasicOption: FC<IBasicOption> = ({
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