import { FC } from "react"
import Link from "next/link"
import { Category } from "../../common"
import { IButtonWithIconProps } from "./types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const ButtonWithIcon: FC<IButtonWithIconProps> = ({ icon,
    text,
    href,
    onClick
}) => {
    return (
        <Link
            href={href}
            onClick={onClick}
            className={`
                    w-full  group
                    flex flex-row justify-center items-center gap-4 opacity-90
                `}
        >
            <span
                className={`
                    w-8 h-8 rounded-full                   
                    border-2 border-light-acent dark:border-dark-acent
                    cursor-pointer
                    flex flex-row justify-center items-center 
                    hover: duration-300 group-hover:border-light-primary dark:group-hover:border-dark-primary               
        `}
            >
                <FontAwesomeIcon
                    icon={icon}
                    className="text-md text-center text-light-text dark:text-dark-text"
                />
            </span>
            <div
                className="opacity-0  group-hover:opacity-95 md:flex hidden"
            >
                <Category text={text} />
            </div>
        </Link>
    )
}