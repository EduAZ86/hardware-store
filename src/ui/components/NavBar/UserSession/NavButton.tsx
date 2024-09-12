import Link from "next/link"
import { FC } from "react"
import { INavButtonProps } from "./types"
import { twJoin } from "tailwind-merge"

export const NavButton: FC<INavButtonProps> = ({
    href,
    text,
    leftBorder
}) => {

    return (
        <Link
            href={href}
            className={twJoin(
                `text-light-text dark:text-dark-text
                font-semibold pr-4                
                hover:text-light-primary dark:hover:text-dark-primary                          
                `,
                leftBorder && "border-r-2 border-light-text dark:border-dark-text"
            )
            }
        >
            {text}
        </Link>
    )
}