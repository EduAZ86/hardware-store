import { FC, useState } from "react";
import { IUserSessionProps } from "./types";
import { Category } from "../../common/typography/Category/Category";
import { DropDownMenu } from "../../common";
import Link from "next/link";
import { signOut } from "next-auth/react";
import ThemeSwitcher from "@/ui/theme/ThemeSwitcher";
import { ListLI } from "./ListLI";
import { ButtonWithIcon } from "../ButtonWithIcon/ButtonWithIcon";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
export const UserSession: FC<IUserSessionProps> = ({ user }) => {

    const defaultImage = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const handleLeave = () => {
        setIsHovered(false);
        setShowMenu(false)
    }

    return (
        <div
            className={`                    
                    w-full
                    h-full
                    display flex flex-row-reverse gap-2
                    relative
                    justify-end items-center                  
                    group       
                `}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleLeave}
            onBlur={handleLeave}
            onClick={() => setShowMenu(!showMenu)}
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
                    {user?.username}
                </h4>
            </div>
            <img
                src={user?.picture || defaultImage}
                alt="user-image"
                className={`
                    w-8 h-8 rounded-full
                    object-cover
                    border-2 border-light-acent dark:border-dark-acent
                    cursor-pointer
                    md:block hidden 
                    hover: duration-300 group-hover:border-light-primary dark:group-hover:border-dark-primary               
                `}
            />
            <div className={`
                    absolute w-fit 
                    flex md:hidden 
                    flex-row 
                    ml-3
                    items-center justify-center 
                    gap-2 
                    ${showMenu ? "p-1" : "p-0"}
                    rounded-l-full rounded-r-full 
                    bg-light-acent dark:bg-dark-acent
                `}>
                {
                    showMenu
                        ?
                        <>
                            <ButtonWithIcon
                                icon={faEdit}
                                text="Edit"
                                href={`/user/${user?._id}`}
                                key={"edit"}
                                onClick={() => setShowMenu(!showMenu)}
                            />
                            <ThemeSwitcher />
                        </>
                        :
                        <img
                            src={user?.picture || defaultImage}
                            alt="user-image"
                            className={`
                            w-8 h-8 rounded-full
                            
                            object-cover
                            border-2 border-light-acent dark:border-dark-acent
                            cursor-pointer 
                            hover: duration-300 group-hover:border-light-primary dark:group-hover:border-dark-primary               
                            `}
                        />

                }
            </div>
            <DropDownMenu
                key="session"
                isHovered={isHovered}
                backgroundColor="primary"
            >
                <ul className="flex flex-col gap-2">
                    {user?.role === "admin" && <ListLI key="addProduct"><Link href={`/inventary`}>Inventary</Link></ListLI>}
                    <ListLI key="user"><Link href={`/user/${user?._id}`}>acount</Link></ListLI>
                    <ListLI key="Logout"><button onClick={() => signOut({ callbackUrl: "/" })}>logout</button></ListLI>
                    <ListLI key="theme">theme: <ThemeSwitcher /></ListLI>
                </ul>
            </DropDownMenu>
        </div>
    )
}