import { FC } from "react";
import { ITitleProps } from "./types";

export const Title: FC<ITitleProps> = ({
    text
}) => {
    return (
        <h2
            className={`
                text-3xl px-3 py-2
                text-light-text dark:text-dark-text
                tracking-normal font-normal
            `}
        >
            {text}
        </h2>
    )
}