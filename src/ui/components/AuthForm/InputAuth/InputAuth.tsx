import { FC } from "react";
import { IInputAuthProps } from "./types";

export const InputAuth: FC<IInputAuthProps> = ({
    label,
    disabled,
    ...otherInputProps
}) => {
    return (
        <div
            className={`
                w-full h-fit
                flex flex-row relative
            `}
        >
            <label>
                {label}
            </label>
            <input
                {...otherInputProps}
            />

        </div>
    )
}