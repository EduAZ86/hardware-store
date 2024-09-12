import { FC } from "react";
import { IInfoCardProps } from "./types";

export const InfoCard: FC<IInfoCardProps> = ({
    title,
    text
}) => {
    return (
        <div className="w-full h-fit flex flex-row justify-between items-center text-light-text dark:text-dark-text ">
            <h3 className="text-xl font-medium">{title}</h3>
            <p className="text-lg font-extralight">{text}</p>
        </div>
    )
}