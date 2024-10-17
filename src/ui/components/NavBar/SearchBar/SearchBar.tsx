import { FC } from "react";
import { ISearchBarProps } from "./types";
import { InputSearch } from "./InputSearch";
import { ButtonClear } from "./ButtonSearch";

export const SearchBar: FC<ISearchBarProps> = ({ }) => {
    return (
        <div
            className={`
                w-2/3 
                h-10               
                flex 
                flex-row 
                justify-center 
                items-center
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