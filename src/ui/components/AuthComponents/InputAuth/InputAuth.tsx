import { FC } from "react";
import { IInputAuthProps } from "./types";

export const InputAuth: FC<IInputAuthProps> = ({
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
                flex flex-col relative
                gap-1
            `}
        >
            <input
                {...register(name,
                    {
                        required: requiredMessage !== undefined,
                        message: requiredMessage
                    })}
                {...otherInputProps}
                className={`
                    w-full h-12 rounded-l-full rounded-r-full
                    dark:bg-dark-acent bg-light-acent
                    text-light-text dark:text-dark-text
                    px-5
                    focus:outline-none focus:ring-1
                    text-base
                    focus:ring-light-primary dark:focus:ring-dark-primary
                    shadow-inner
                    `}
            />
            <span className="text-light-error text-xs dark:text-dark-error">{errors[name]?.message}</span>
        </div>
    )
}