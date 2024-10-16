import { FC } from "react";
import { ICardTitleProps } from "./types";

export const CardTitle: FC<ICardTitleProps> = ({
    text,
    horientation
}) => {
    return (
        <h4
            className={`
                text-sm 
                ${horientation === "left" && "text-left"}              
                ${horientation === "right" && "text-right"}
                text-light-text dark:text-dark-text
                group-hover:text-light-primary group-hover:dark:text-dark-primary
            `}
        >
            {text}
        </h4>
    )
}