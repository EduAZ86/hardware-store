import { FC, useState } from "react";
import { IUserSessionProps } from "./types";
import { Category } from "../../common/typography/Category/Category";
import { DropDownMenu } from "../../common";
import Link from "next/link";
import { signOut } from "next-auth/react";
import ThemeSwitcher from "@/ui/theme/ThemeSwitcher";
import { ListLI } from "./ListLI";
export const UserSession: FC<IUserSessionProps> = ({ user }) => {
    const defaultImage = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
        <div
            className={`
                    w-40 
                    display flex flex-row gap-2
                    relative
                    justify-center items-center
                    z-10
                           
                `}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className={`
                    md:flex hidden flex-col
                    justify-around items-center

                    `}
            >
                <Category
                    text="User"
                />
                <h4
                    className={`
                    text-xs text-center
                    text-light-text dark:text-dark-text
                    group-hover:text-light-primary group-hover:dark:text-dark-primary
                    `}
                >
                    {user?.name}
                </h4>
            </div>
            <img
                src={user?.image || defaultImage}
                alt="user-image"
                className={`
                    w-8 h-8 rounded-full
                    object-cover
                    border-2 border-light-acent dark:border-dark-acent
                    cursor-pointer 
                    hover: duration-300 hover:border-light-primary dark:hover:border-dark-primary               
                `}
            />
            <DropDownMenu
                key="session"
                isHovered={isHovered}
                backgroundColor="primary"
            >
                <ul className="flex flex-col gap-2">
                    <ListLI key="user"><Link href={`/user/${user?.name}`}>configuration</Link></ListLI>
                    <ListLI key="Logout"><button onClick={() => signOut()}>logout</button></ListLI>
                    <ListLI key="theme">theme: <ThemeSwitcher /></ListLI>
                </ul>
            </DropDownMenu>

        </div>
    )
}