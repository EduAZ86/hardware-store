import { FC } from "react";
import { ISearchBarProps } from "./types";
import { InputSearch } from "./InputSearch";
import { ButtonClear } from "./ButtonSearch";

export const SearchBar: FC<ISearchBarProps> = ({ }) => {
    return (
        <div
            className={`
                w-fr
                h-10               
                flex 
                flex-row 
                justify-center 
                items-center
                relative 
                gap-0
                rounded-l-full rounded-r-full overflow-hidden
                shadow-inner
                bg-light-acent dark:bg-dark-acent              
            `}
        >
            <div
                className="flex flex-row w-full h-full md:h-10"
            >
                <InputSearch />
                <ButtonClear />
            </div>
        </div>
    )
}