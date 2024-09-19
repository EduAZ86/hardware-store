"use client"
import { FC } from "react";
import { INavBarProps } from "./types";
import { SearchBar } from "./SearchBar/SearchBar";
import ThemeSwitcher from "@/ui/theme/ThemeSwitcher";
import { useSession } from "next-auth/react";
import { UserSession } from "./UserSession/UserSession";
import Link from "next/link";
import { Cart } from "./CartButton/CartButton";
import { NavButton } from "./UserSession/NavButton";

export const NavBar: FC<INavBarProps> = ({
}) => {
    const { data: session, status } = useSession();
    const sessionUser = session?.user;
    const user = sessionUser?.userData;
    const favoritesUrl = `/favorites/${user?._id}`

    return (
        <div
            className={`
                w-full h-fit flex flex-col
                bg-gradient-to-r from-light-primary to-light-secondary
                dark:bg-gradient-to-r dark:from-dark-primary dark:to-dark-secondary
                `}
        >
            <div className={`
                relative flex
                flex-row
                md:justify-around justify-start
                md:px-2 px-2
                items-center            
                w-full h-20
                gap-2
                `}>
                <SearchBar />
                {status === "authenticated" &&
                    <div className=" h-full relative flex flex-row justify-center items-start gap-2 pt-4">
                        <Cart
                            userID={user?._id as string}
                        />
                        <UserSession user={user} />
                    </div>
                }
                {status === "unauthenticated" &&
                    <div className="relative flex flex-row gap-4 ">
                        <Link href="/auth/login" className="text-light-text dark:text-dark-text text-xs duration-300 hover:text-light-primary dark:hover:text-dark-primary   ">Login</Link>
                        <ThemeSwitcher />
                    </div>
                }
            </div>
            <div className="w-full h-fit flex justify-center items-center pb-2 gap-4 opacity-90">
                <NavButton key={"home"} href="/" text="Home" leftBorder />
                <NavButton key={"offers"} href="/offers" text="Offers" leftBorder />
                <NavButton key={"history"} href="/history" text="History" leftBorder />
                <NavButton key={"favorites"} href={favoritesUrl} text="Favorites" />
            </div>
        </div>
    )
}