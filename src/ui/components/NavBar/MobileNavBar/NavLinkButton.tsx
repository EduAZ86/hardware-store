import { FC } from "react";
import { INavLinkButtonProps } from "./types";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NavLinkButton: FC<INavLinkButtonProps> = ({
    href,
    icon,
    isCurrentSelected,
    rounded
}) => {
    return (
        <Link
            href={href}
            className={`
                w-12 h-12 flex flex-row items-center justify-center
                ${isCurrentSelected ? "text-light-text dark:text-dark-text" : " text-light-primary dark:text-dark-primary"}              
               bg-light-background dark:bg-dark-background
               ${rounded ? "rounded-full": "rounded-lg"}          
               shadow-lg
               active:shadow-inner active:scale-[.99]
               duration-300

                `}
        >
            <FontAwesomeIcon
                className="text-2xl  text-center"
                icon={icon}
            />
        </Link>
    )
}