import { FC } from "react";
import { IBasicSelectProps } from "./types";
import { BasicOption } from "./BasicOption";

export const BasicSelect: FC<IBasicSelectProps> = ({
    options,
    placeholder,
    register,
    requiredMessage,
    errors,
    title,
    ...otherSelectProps

}) => {
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
                {...otherSelectProps}
                {...register(otherSelectProps?.name?.toString(), {
                    required: requiredMessage !== undefined,
                })}
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
                        <BasicOption
                            key={`basic-select-option-${index}`}
                            {...option}
                        />
                    )
                })}
            </select>
        </div>
    )
}