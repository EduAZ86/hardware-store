import { FC } from "react"
import Link from "next/link"
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
                    w-8 h-8 rounded-full                   
                    border-2 border-light-acent dark:border-dark-acent
                    cursor-pointer
                    flex flex-row justify-center items-center 
                    hover: duration-300
                     hover:border-light-primary dark:hover:border-dark-primary  
                `}
        >

            <FontAwesomeIcon
                icon={icon}
                className="text-md text-center text-light-text dark:text-dark-text"
            />
        </Link>
    )
}