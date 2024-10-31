import { FC } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IMenuButtonProps } from "./types"
import ThemeSwitcher from "@/ui/theme/ThemeSwitcher"
import { IconButton } from "@/ui/components/common"
import { faSignOut } from "@fortawesome/free-solid-svg-icons"
import { signOut } from "next-auth/react"

export const MenuButton: FC<IMenuButtonProps> = ({
    icon,
    disabled,
    onClick,
    isAuthenticated,
    isActive
}) => {
    return (
        <div
            onClick={onClick}
            className={`
                w-10 h-10 flex
                relative 
                items-center justify-center
                rounded-full
                bg-light-primary dark:bg-dark-primary               
                text-dark-text dark:text-dark-text
                ${!disabled && "active:scale-[.98] active:shadow-inner"}
                disabled:cursor-not-allowed
                shadow-lg
                duration-300
                ${isActive && isAuthenticated && " w-32 pl-2 gap-1 justify-end duration-300"}
                ${isActive && !isAuthenticated && " w-20 pl-2 gap-1 justify-end duration-300"}
                `
            }
        >
            {isActive && <ThemeSwitcher />}
            {isActive && isAuthenticated &&
                <IconButton
                    icon={faSignOut}
                    onClick={() => { signOut({ callbackUrl: "/" }) }}
                />}
            <button
                onClick={onClick}
                type="button"
                className={`
                w-10 h-10 flex
                relative 
                items-center justify-center
                rounded-full  
                `
                }
            >
                <div
                    className={`
                    w-10 h-10 flex
                    absolute
                    right-0 
                    items-center justify-center
                    z-10
                    `}
                >

                    <FontAwesomeIcon icon={icon}
                        className={`                 
                         duration-300
                      ${isActive && "rotate-45"}
                    `}
                    />
                </div>
            </button>
        </div>
    )
}