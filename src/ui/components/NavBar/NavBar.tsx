"use client"
import { FC } from "react";
import Link from "next/link";
import { INavBarProps } from "./types";
import { useSession } from "next-auth/react";
import { Cart } from "./CartButton/CartButton";
import { SearchBar } from "./SearchBar/SearchBar";
import ThemeSwitcher from "@/ui/theme/ThemeSwitcher";
import { UserSession } from "./UserSession/UserSession";
import { ButtonWithIcon } from "./ButtonWithIcon/ButtonWithIcon";
import { faHeart, faHome, faSignIn } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

export const NavBar: FC<INavBarProps> = ({
}) => {
    const { data: session, status } = useSession();
    const sessionUser = session?.user;
    const user = sessionUser?.userData;
    const favoritesUrl = `/favorites/${user?._id}`;
    const currentUrl = usePathname();
    return (
        <div
            className={`
                w-full h-fit flex flex-col
                bg-gradient-to-r from-light-primary to-light-secondary
                dark:bg-gradient-to-r dark:from-dark-primary dark:to-dark-secondary relative
                z-10
                `}
        >
            <div className={`
                relative flex
                flex-row
                md:justify-around justify-start
                md:px-2 px-2
                items-center            
                w-full h-fit
                gap-2
                `}>
                {currentUrl === "/" &&
                    <SearchBar />
                }
            </div>
            <div className="w-full h-fit flex justify-center items-center pb-2 gap-4 opacity-90">
                {status === "authenticated" &&

                    <ButtonWithIcon
                        key={"fav"}
                        icon={faHeart}
                        href={favoritesUrl}
                        text="Favorites"

                    />
                }
                <ButtonWithIcon
                    key={"home"}
                    icon={faHome}
                    href={"/"}
                    text="Home"
                />
                {status === "authenticated" &&
                    <div className=" h-full relative flex flex-row justify-center items-start gap-2 pt-4 ">
                        <Cart
                            userID={user?._id as string}
                        />
                        <UserSession user={user} />
                    </div>
                }
                {status === "unauthenticated" &&
                    <div className="relative flex flex-row gap-4 ">
                        <ButtonWithIcon
                            key={"login"}
                            icon={faSignIn}
                            href={"/auth/login"}
                            text="Login"
                        />
                        <ThemeSwitcher />
                    </div>
                }
            </div>
        </div>
    )
}
