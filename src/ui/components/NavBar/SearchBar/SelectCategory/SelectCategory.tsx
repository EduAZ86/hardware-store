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
                md:w-fit w-full 
                px-4
                md:h-10 h-8
                md:rounded-l-lg rounded-none
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