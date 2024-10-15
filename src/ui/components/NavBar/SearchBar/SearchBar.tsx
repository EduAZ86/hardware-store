import { FC } from "react";
import { ISearchBarProps } from "./types";
import { InputSearch } from "./InputSearch";
import { ButtonClear } from "./ButtonSearch";

export const SearchBar: FC<ISearchBarProps> = ({ }) => {
    return (
        <div
            className={`
                md:w-2/3 w-1/2 
                md:h-10 h-30
                mt-4 
                flex 
                md:flex-row flex-col 
                relative 
                gap-0 md:gap-y-2              
            `}
        >
            <div
                className="flex flex-row w-full h-8 md:h-10 rounded-lg overflow-hidden"
            >
                <InputSearch />
                <ButtonClear />
            </div>
        </div>
    )
}