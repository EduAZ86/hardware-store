import { FC } from "react";
import { IOptionCategoryProps } from "./types";

export const OptionCategory: FC<IOptionCategoryProps> = ({
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