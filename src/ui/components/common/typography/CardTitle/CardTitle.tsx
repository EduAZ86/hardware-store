import { FC } from "react";
import { ICardTitleProps } from "./types";

export const CardTitle: FC<ICardTitleProps> = ({
    text
}) => {
    return (
        <h4
            className={`
                text-sm text-center
                text-light-text dark:text-dark-text
                group-hover:text-light-primary group-hover:dark:text-dark-primary
            `}
        >
            {text}
        </h4>
    )
}