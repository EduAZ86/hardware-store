import { FC } from "react";
import { IBasicSelectProps } from "./types";
import { BasicOption } from "./BasicOption";

export const BasicSelect: FC<IBasicSelectProps> = ({
    options,
    placeholder,
    ...otherSelectProps

}) => {
    return (
        <select
            {...otherSelectProps}
            className={`
            w-fit px-2
            rounded-l-lg
            cursor-pointer
            bg-light-background dark:bg-dark-background
            text-light-text dark:text-dark-text  focus:outline-none
            focus:ring-1 focus:ring-light-secondary dark:focus:ring-dark-secondary
            `}
        >
            {placeholder && <option value="" >{placeholder}</option>}
            {options?.map((option, index) => {
                return (
                    <BasicOption
                        key={`basic-select-option-${index}`}
                        {...option}
                    />
                )
            })}
        </select>
    )
}