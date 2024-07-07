import { FC } from "react";
import { ISearchBarProps } from "./types";

import { InputSearch } from "./InputSearch";
import { ButtonSearch } from "./ButtonSearch";
import { SelectCategory } from "./SelectCategory/SelectCategory";
import { TOptionCategory } from "./SelectCategory/types";

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
            w-2/3 md:h-10 h-30 flex md:flex-row flex-col relative md:gap-0 gap-y-2
            `}
        >
            <SelectCategory
                options={options}
                placeholder="All categories"
                title="all categories"
            />
            <div
                className="flex flex-row w-full"
            >
                <InputSearch />
                <ButtonSearch
                />
            </div>

        </div>
    )
}