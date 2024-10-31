"use client"
import { FC, useState } from "react"
import { UserButton } from "../common"
import { useSession } from "next-auth/react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { SearchBar } from "../SearchBar/SearchBar";
import { IMobileNavBarProps } from "./types";
import { NavigationBar } from "./NavigationBar";
import { usePathname } from "next/navigation";
import { MenuButton } from "../common/MenuButton/MenuButton";


export const MobileNavBar: FC<IMobileNavBarProps> = ({
    children
}) => {

    const { data: session, status } = useSession();
    const [isActive, setIsActive] = useState(false);
    const currentUrl = usePathname().split("/")[1];

    const handleSettings = () => {
        setIsActive(!isActive);
    }

    return (
        <div
            className={`
                w-full h-screen
                md:hidden  
                relative
                grid grid-rows-[auto,1fr,auto]
                `
            }
        >
            <div
                className={`             
                w-full h-20              
                top-0 left-0                           
                flex flex-row
                justify-between
                items-center
                px-4
                gap-2
                z-10
                bg-light-background dark:bg-dark-background
                shadow-md
                `}
            >
                <UserButton
                    key={session?.user?._id}
                    user={session?.user.userData}
                    isAuthenticated={status === "authenticated"}
                />
                {currentUrl === "" &&
                    <SearchBar />
                }
                <MenuButton
                    onClick={handleSettings}
                    isAuthenticated={status === "authenticated"}
                    icon={faBars}
                    isActive={isActive}

                />
            </div>
                <div
                    className="w-full h-full flex flex-col"
                >
                    {children}
                </div>         
            {status === "authenticated" &&
                <NavigationBar
                    userID={session.user.userData._id}
                    currentPath={currentUrl}
                />
            }
        </div>
    )
}