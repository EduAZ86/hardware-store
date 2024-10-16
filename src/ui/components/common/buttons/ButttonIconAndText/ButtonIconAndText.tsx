import { FC } from "react"
import { IButtonIconAndTextProps } from "./types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { twJoin } from "tailwind-merge"

export const ButtonIconAndText: FC<IButtonIconAndTextProps> = ({
    text,
    icon,
    onClick,
    isActive
}) => {
    return (
        <button
            onClick={onClick}
            className={twJoin(                `
                    w-full h-fit flex flex-row gap-4 items-center 
                    justify-center md:justify-start                  
                    hover:text-light-acent dark:hover:text-dark-acent
                    active:scale-95
                    `
                ,
                isActive ? "text-light-primary dark:text-dark-primary" : " text-light-text dark:text-dark-text"

            )}
        >
            <FontAwesomeIcon
                icon={icon}
                className=" text-md"
            />
            <h4
                className="
                    md:flex hidden                   
                    font-semibold
                    text-sm
                    "
            >{text}</h4>
        </button>
    )
}