import { FC } from "react";
import { IInputTextAreaProps } from "./types";

export const InputTextArea: FC<IInputTextAreaProps> = ({
    label,
    name,
    disabled,
    register,
    requiredMessage,
    errors,
    ...otherInputProps
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
                `}
            >
                {label}
            </label>
            <textarea
                {...register(name,
                    {
                        required: requiredMessage !== undefined,
                        message: requiredMessage
                    })}
                {...otherInputProps}
                className={`
                    w-full h-48 rounded-md 
                    dark:bg-dark-background bg-light-background
                    dark:text-dark-acent text-light-acent
                    px-3 py-2
                    focus:outline-none focus:ring-1
                    text-xs
                    focus:ring-light-secondary dark:focus:ring-dark-secondary
                    resize-none overflow-auto
                    `}
            />
            <span className="text-light-error text-xs dark:text-dark-error">{errors[name]?.message && typeof errors[name]?.message === 'string' ? errors[name]?.message : ""}</span>
        </div>
    )
}