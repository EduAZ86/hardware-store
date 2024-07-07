import { FC } from "react";
import { ITextBtnProps } from "./types";

export const TextBtn: FC<ITextBtnProps> = ({
    text

}) => {
    return (
        <span
            className={`
                text-center tracking-wide first-letter:uppercase
            `}
        >
            {text}
        </span>
    )
}