import { FC } from "react";
import { ISearchBarProps } from "./types";
import { InputSearch } from "./InputSearch";
import { ButtonSearch } from "./ButtonSearch";
import { TOptionCategory } from "./SelectCategory/types";
import { SelectCategory } from "./SelectCategory/SelectCategory";

export const SearchBar: FC<ISearchBarProps> = ({ }) => {

    const option1: TOptionCategory = {
        disabled: false,
        id: "asdsadjj",
        title: "Motherboard",
        value: "motherboard"
    }
    const option2: TOptionCategory = {
        disabled: false,
        id: "asdsadsdsd",
        title: "Graphic Card",
        value: "graphic"
    }
    const option3: TOptionCategory = {
        disabled: false,
        id: "asdsasdsdd",
        title: "Procesor",
        value: "procesor"
    }
    const options = [option1, option2, option3]
    return (
        <div
            className={`
                md:w-2/3 w-1/2 
                md:h-10 h-30 
                flex 
                md:flex-row flex-col 
                relative 
                gap-0 md:gap-y-2
                md:rounded-none rounded-lg overflow-hidden
            `}
        >
            <SelectCategory
                options={options}
                placeholder="All categories"
                title="all categories"
                
            />
            <div
                className="flex flex-row w-full h-8 md:h-10"
            >
                <InputSearch />
                <ButtonSearch
                />
            </div>
        </div>
    )
}