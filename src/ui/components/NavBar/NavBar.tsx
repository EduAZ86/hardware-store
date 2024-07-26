"use client"
import { FC } from "react";
import { INavBarProps } from "./types";
import { SearchBar } from "./SearchBar/SearchBar";
import ThemeSwitcher from "@/ui/theme/ThemeSwitcher";
import { useSession } from "next-auth/react";
import { IUserToken } from "@/app/api/auth/[...nextauth]/userToken.interface";
import { UserSession } from "./UserSession/UserSession";
import Link from "next/link";

export const NavBar: FC<INavBarProps> = ({
}) => {
    const { data: session, status } = useSession()
    const user = session?.user as IUserToken
        
    return (
        <div className={`
        relative flex flex-row justify-around items-center
        bg-gradient-to-r from-light-primary to-light-secondary
        dark:bg-gradient-to-r dark:from-dark-primary dark:to-dark-secondary 
        w-full h-20
        gap-2 
        `}>
            <SearchBar />
            {status === "authenticated" &&
                <UserSession user={user} />
            }
            {status === "unauthenticated" &&
                <div className="relative flex flex-row gap-4">
                    <Link href="/auth/login" className="text-light-text dark:text-dark-text text-xs duration-300 hover:text-light-primary dark:hover:text-dark-primary   ">Login</Link>
                    <ThemeSwitcher />
                </div>
            }
        </div>
    )
}