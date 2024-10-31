import { FC } from "react";
import { IBasicSelectProps } from "./types";
import { BasicOption } from "./BasicOption";


export const BasicSelect: FC<IBasicSelectProps> = ({
    options,
    title,
    placeholder,
    onChange
}) => {
    return (
        <select
            onChange={onChange}
            title={title}
            className={`
                md:w-fit w-full 
                pl-2
                md:h-8 h-8
                rounded-lg 
                cursor-pointer
                bg-light-background dark:bg-dark-background
                text-light-text dark:text-dark-text
                shadow-lg
                focus:outline-none focus:ring-1                
            `}
        >
            {placeholder && <option value="" >{placeholder}</option>}
            {options?.map((option, index) => {
                return (
                    <BasicOption
                        key={`${index}-${option.id}`}
                        label={option.label}
                        value={option.value}
                    />
                )
            })}
        </select>
    )
}