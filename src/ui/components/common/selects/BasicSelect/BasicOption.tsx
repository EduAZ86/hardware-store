import { FC } from "react";
import { IBasicOptionProps } from "./types";

export const BasicOption: FC<IBasicOptionProps> = ({
    label,
    value
}) => {
    return (
        <option
            value={value}
            className={`
                text-sm hover:bg-slate-400
            `}
        >
            {label}
        </option>
    )
}