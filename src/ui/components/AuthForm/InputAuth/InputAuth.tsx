import { FC } from "react";
import { IInputAuthProps } from "./types";

export const InputAuth: FC<IInputAuthProps> = ({
    label,
    disabled,
    register,
    ...otherInputProps
}) => {
    return (
        <div
            className={`
                w-full h-fit
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
            <input
                {...otherInputProps}
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

        </div>
    )
}