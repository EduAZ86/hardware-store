import { FC } from "react";
import { INavBarProps } from "./types";
import { SearchBar } from "./SearchBar/SearchBar";
import ThemeSwitcher from "@/ui/theme/ThemeSwitcher";

export const NavBar: FC<INavBarProps> = ({

}) => {
    return (
        <div className={`
        relative flex flex-row justify-center items-center
        bg-gradient-to-r from-light-primary to-light-secondary
        dark:bg-gradient-to-r dark:from-dark-primary dark:to-dark-secondary 
        w-full h-20
        gap-2 
        `}>
            <SearchBar />
            <ThemeSwitcher/>
        </div>
    )
}