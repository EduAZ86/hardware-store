import { FC } from "react";
import { ITitleProps } from "./types";

export const Title: FC<ITitleProps> = ({
    text
}) => {
    return (
        <h2
            className={`
                text-4xl font-bold
                text-light-text dark:text-dark-text
                tracking-normal 
            `}
        >
            {text}
        </h2>
    )
}