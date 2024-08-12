import { FC } from "react";
import { ISelectProps } from "./types";
import { Option } from "./Option";

export const Select: FC<ISelectProps> = ({
    options,
    placeholder,
    register,
    requiredMessage,
    errors,
    title,
    ...otherSelectProps

}) => {
    const name = otherSelectProps.name
    return (
        <div
            className={`
            w-full h-fit
            min-w-52
            max-w-96
            flex flex-col relative
            gap-1
        `}
        >
            <label
                className={`
                text-light-text dark:text-dark-text font-semibold
                text-sm  
                `}>
                {title}
            </label>


            <select
                {...register(name)}
                {...otherSelectProps}
                className={`
                w-full h-12
                px-1
                md:px-2            
                rounded-lg
                cursor-pointer
                bg-light-background dark:bg-dark-background
                text-light-text dark:text-dark-text  
                focus:ring-1 focus:ring-light-secondary dark:focus:ring-dark-secondary
                text-sm
            `}
            >
                {placeholder && <option value="" >{placeholder}</option>}
                {options?.map((option, index) => {
                    return (
                        <Option
                            key={`basic-select-option-${index}`}
                            {...option}
                        />
                    )
                })}
            </select>
        </div>
    )
}