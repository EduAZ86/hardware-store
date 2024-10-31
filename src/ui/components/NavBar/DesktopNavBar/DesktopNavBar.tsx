"use client"
import { FC } from "react"
import { IDesktopNavBarProps } from "./types"
import { usePathname } from "next/navigation";
import { SearchBar } from "../SearchBar/SearchBar";
import { ButtonWithIcon } from "../ButtonWithIcon/ButtonWithIcon";
import { Cart } from "../CartButton/CartButton";
import { UserSession } from "../UserSession/UserSession";
import { useSession } from "next-auth/react";
import { faHeart, faHome, faSignIn } from "@fortawesome/free-solid-svg-icons";
import { IconButton } from "../../common";

export const DesktopNavBar: FC<IDesktopNavBarProps> = ({
    children,
}) => {
    const { data: session, status } = useSession();
    const sessionUser = session?.user;
    const user = sessionUser?.userData;
    const favoritesUrl = `/favorites/${user?._id}`;
    const currentUrl = usePathname();
    return (
        <div
            className={`
            w-full h-screen
            relative
            hidden  
            md:grid 
            md:grid-rows-[auto,1fr]
            `
            }
        >
            <div
                className={`
                  w-full h-14
                  flex                  
                  flex-row
                  justify-between
                  items-center
                  bg-light-background dark:bg-dark-background
                  shadow-lg
                  gap-4
                  z-10
                  ${currentUrl.split("/")[1] === "auth" && "hidden"}                 
                `}
            >
                <div className="h-full w-20 flex pl-4 justify-center items-center">
                    <img
                        src="/dark.png"
                        alt="light"
                        className="h-10 dark:hidden block"
                    />
                    <img
                        src="/light.png"
                        alt="dark"
                        className="h-10 dark:block hidden"
                    />
                </div>
                {currentUrl === "/" &&
                    <SearchBar />
                }
                <div
                    className={`
                        h-full w-fit 
                        flex flex-row
                        gap-4
                        `}
                >
                    <div
                        className={`
                        h-full w-fit 
                        flex flex-row
                        justify-center
                        items-center
                        gap-4
                        `}
                    >
                        <div
                            className={`flex flex-row-reverse gap-4 ${status === "unauthenticated" && "pr-2"} `}
                        >
                            {status === "authenticated" ?
                                <ButtonWithIcon
                                    key={"fav"}
                                    icon={faHeart}
                                    href={favoritesUrl}
                                    text="Favorites"
                                />
                                :
                                <ButtonWithIcon
                                    key={"login"}
                                    icon={faSignIn}
                                    href={"/auth/login"}
                                    text="Login"
                                />

                            }
                            <ButtonWithIcon
                                key={"home"}
                                icon={faHome}
                                href={"/"}
                                text="Home"
                            />
                        </div>
                    </div>
                    {status === "authenticated" &&
                        <>
                            <Cart
                                userID={user?._id as string}
                            />
                            <UserSession user={user} />
                        </>
                    }
                </div>
            </div>
            <div
                className="w-full h-full flex flex-col"
            >
                {children}
            </div>
        </div>
    )
}