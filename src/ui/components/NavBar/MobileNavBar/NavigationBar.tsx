import { FC } from "react"
import { NavLinkButton } from "./NavLinkButton"
import { faCartShopping, faHeart, faHome, faUserEdit } from "@fortawesome/free-solid-svg-icons"
import { INavigationBarProps } from "./types"


export const NavigationBar: FC<INavigationBarProps> = ({
    userID,
    currentPath
}) => {
    console.log("currentPath", currentPath);
    
    return (
        <div
            className={`
                w-full h-20
                flex flex-row
                justify-around
                items-center
                bg-light-background dark:bg-dark-background
                shadow-black shadow-2xl
                px-4
                `}
        >
            <NavLinkButton
                key={"home"}
                href="/"
                icon={faHome}
                isCurrentSelected={currentPath === ""}
            />
            <NavLinkButton
                key={"favorites"}
                href={`/favorites/${userID}`}
                icon={faHeart}
                isCurrentSelected={currentPath === "favorites"}
            />

            <NavLinkButton
                key={"cart"}
                href={`/cart/${userID}`}
                icon={faCartShopping}
                isCurrentSelected={currentPath === "cart"}
            />
            <NavLinkButton
                key={"profile"}
                href={`/user/${userID}`}
                icon={faUserEdit}
                isCurrentSelected={currentPath === `user`}
            />

        </div>
    )
}