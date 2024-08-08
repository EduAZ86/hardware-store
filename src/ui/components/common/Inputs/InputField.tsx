import { FC } from "react";
import { IInputFieldProps } from "./types";

export const InputField: FC<IInputFieldProps> = ({
    label,
    name,
    disabled,
    register,
    requiredMessage,
    errors,
    value,
    type,
    watch,
    ...otherInputProps
}) => {

    const watchedValue = watch ? watch(name) : "";
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
            {label &&
                <label
                    className={`
                  text-light-text dark:text-dark-text font-semibold
                  text-sm  
                `}
                >
                    {type === "range" ? `${label} (${watchedValue || 0} x  ⭐)` : label}
                </label>
            }
            <input
                {...register(name,
                    {
                        required: requiredMessage !== undefined,
                        message: requiredMessage
                    })}
                {...otherInputProps}
                type={type}
                className={`
                    w-full h-12 rounded-md 
                    dark:bg-dark-background bg-light-background
                    dark:text-dark-acent text-light-acent
                    px-3
                    focus:outline-none focus:ring-1
                    text-xs
                    focus:ring-light-secondary dark:focus:ring-dark-secondary
                    `}
            />
            <span className="text-light-error text-xs dark:text-dark-error">{errors[name]?.message}</span>
        </div>
    )
}