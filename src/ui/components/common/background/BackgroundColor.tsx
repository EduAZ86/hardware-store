import { FC } from "react";
import { twJoin } from "tailwind-merge";
import { IBackgroundColorProps } from "./types";

export const BackgroundColor: FC<IBackgroundColorProps> = ({
    backgroundColor,
    hoverBackgroundColor,
    opacity,
    hoverOpacity

}) => {
    return (
        <span
            className={twJoin(
                "w-full h-full absolute -z-1 top-0 left-0 ",
                backgroundColor === "primary" && "bg-light-primary dark:bg-dark-primary",
                backgroundColor === "secondary" && "bg-light-secondary dark:bg-dark-secondary",
                backgroundColor === "background" && "bg-light-background dark:bg-dark-background",
                backgroundColor === "acent" && "bg-light-acent dark:bg-dark-acent",
                backgroundColor === "text" && "bg-light-text dark:bg-dark-text",
                backgroundColor === "error" && "bg-light-error dark:bg-dark-error",
                backgroundColor === "transparent" && "bg-transparent dark:bg-transparent",
                hoverBackgroundColor === "primary" && "group-hover:bg-light-primary dark:group-hover:bg-dark-primary",
                hoverBackgroundColor === "secondary" && "group-hover:bg-light-secondary dark:group-hover:bg-dark-secondary",
                hoverBackgroundColor === "background" && "group-hover:bg-light-background dark:group-hover:bg-dark-background",
                hoverBackgroundColor === "acent" && "group-hover:bg-light-acent dark:group-hover:bg-dark-acent",
                hoverBackgroundColor === "text" && "group-hover:bg-light-text dark:group-hover:bg-dark-text",
                hoverBackgroundColor === "error" && "group-hover:bg-light-error dark:group-hover:bg-dark-error",
                hoverBackgroundColor === "transparent" && "group-hover:bg-transparent dark:group-hover:bg-transparent",
                hoverOpacity === 'opacity-0' && 'group-hover:opacity-0',
                hoverOpacity === 'opacity-25' && 'group-hover:opacity-25',
                hoverOpacity === 'opacity-50' && 'group-hover:opacity-50',
                hoverOpacity === 'opacity-75' && 'group-hover:opacity-75',
                hoverOpacity === 'opacity-100' && 'group-hover:opacity-100',
                opacity && opacity,
            )}
        />
    )
}
