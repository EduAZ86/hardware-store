import { FC } from "react"
import { IUserButtonProps } from "./types"
import Link from "next/link"
import { NavLinkButton } from "../../MobileNavBar/NavLinkButton"
import { faSignIn } from "@fortawesome/free-solid-svg-icons"

export const UserButton: FC<IUserButtonProps> = ({
    user,
    isAuthenticated
}) => {

    if (isAuthenticated) {
        return (
            <Link href={`/user/${user?._id}`}
                className={`
                    w-14 h-12
                    min-w-14 
                    flex items-center justify-center
                    bg-light-background dark:bg-dark-background
                    shadow-lg 
                    active:shadow-inner active:scale-[.99]
                    rounded-full
                    
                    `}
            >
                <img
                    src={user?.picture}
                    alt="user-image"
                    className={`
                        w-14 h-14 rounded-full
                        object-cover
                        border-4 border-light-acent dark:border-dark-acent
                        cursor-pointer                
                        hover: duration-300 group-hover:border-light-primary dark:group-hover:border-dark-primary               
                    `}
                />
            </Link>
        )
    } else {
        return (
            <NavLinkButton
                href="/auth/login"
                icon={faSignIn}
                isCurrentSelected={false}
                rounded={true}
            />
        )
    }
}