import { FC } from "react";
import { IMainTitleProps } from "./types";

export const MainTitle: FC<IMainTitleProps> = ({
    text
}) => {
    return (
        <h1
            className={`
                text-light-text dark:text-dark-text
                w-full h-fit text-3xl font-bold
            `}
        >
            {text}
        </h1>
    )
}