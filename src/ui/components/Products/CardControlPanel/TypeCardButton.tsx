import { FC } from "react";
import { BackgroundColor } from "../../common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ITypeCardButtonProps } from "./types";
import { twJoin } from "tailwind-merge";

export const TypeCardButton: FC<ITypeCardButtonProps> = ({
    icon,
    isActive,
    value,
    onClick
}) => {
    return (
        <button
            value={value}
            onClick={onClick}
            className={
                twJoin(
                    `
                    flex flex-row relative z-0 w-fit h-fit
                    group overflow-hidden
                    items-center justify-center text-center text-sm
                    px-3 py-2 rounded-lg
                    border-[1px] border-solid
                    dark:hover:border-dark-primary hover:border-light-primary               
                    dark:hover:text-dark-primary hover:text-light-primary
                    `,
                    isActive ? "border-light-primary dark:border-dark-primary" : " border-light-acent dark:border-dark-acent"
                )
            }
        >
            <BackgroundColor
                backgroundColor={isActive ? "primary" : "transparent"}
            />
            <FontAwesomeIcon icon={icon} />
        </button>
    )
}