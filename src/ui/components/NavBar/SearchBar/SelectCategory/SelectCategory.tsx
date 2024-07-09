import { FC } from "react";
import { ISelectCategoryProps } from "./types";
import { OptionCategory } from "./OptionCategory";


export const SelectCategory: FC<ISelectCategoryProps> = ({
    options,
    title,
    placeholder
}) => {
    return (
        <select
            title={title}
            className={`
                w-fit px-4
                rounded-l-lg
                cursor-pointer
                bg-light-background dark:bg-dark-background
                text-light-acent dark:text-dark-acent
                focus:outline-none focus:ring-1 focus:ring-light-secondary dark:focus:ring-dark-secondary                
            `}
        >
            {placeholder && <option value="" >{placeholder}</option>}
            {options?.map((option, index) => {
                return (
                    <OptionCategory
                        key={`${index}-${option.id}`}
                        label={option.title}
                        value={option.value}
                    />
                )
            })}            
        </select>
    )
}