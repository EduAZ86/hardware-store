"use client"
import { ChangeEvent, FC } from "react";
import { ICardControlPanelProps } from "./types";
import { TypeCardButton } from "./TypeCardButton";
import { PaginationIndex } from "./PaginationIndex";
import { TOption } from "../../common/selects/Select/types";

import { faBars, faThLarge, } from "@fortawesome/free-solid-svg-icons";
import { BasicSelect } from "../../common";
import { TSortOptions } from "@/types/userInterface.types";


export const CardControlPanel: FC<ICardControlPanelProps> = ({
    setSortOption,
    totalResults,
    currentResultsShown
}) => {

    const sortPriceOption1: TOption = {
        disabled: false,
        id: "discount_asc",
        label: "discount high to low",
        value: "discount_asc"
    }
    const sortPriceOption2: TOption = {
        disabled: false,
        id: "discount_desc",
        label: "discount low to high",
        value: "discount_desc"
    }

    const sortDiscountOption1: TOption = {
        disabled: false,
        id: "price_asc",
        label: 'largest to smallest price',
        value: "price_asc"
    }
    const sortDiscountOption2: TOption = {
        disabled: false,
        id: "price_desc",
        label: 'smallest to largest price',
        value: "price_desc"
    }
    const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        setSortOption(e.target.value as TSortOptions);
    }

    const handleSelectCardType = () => {
        console.log("select");

    }

    return (
        <div
            className={`
                w-full h-fit
                py-3
                relative
                z-0
                flex 
               md:flex-row flex-col 
                flex-wrap
                items-center
                justify-around
                border-solid border-b-[1px] border-light-primary dark:border-dark-primary
            `}
        >
            <PaginationIndex
                currentStartPage={currentResultsShown}
                lengthResults={totalResults}
            />
            <div
                className={`
               
                    flex flex-col relative items-center gap-3
                    md:flex-row
                `}
            >
                <span
                    className="md:visible hidden text-sm text-start text-light-text dark:text-dark-text"
                >
                    Sort by
                </span>

                <BasicSelect
                    options={[sortPriceOption1, sortPriceOption2, sortDiscountOption1, sortDiscountOption2]}
                    placeholder="date"
                    key={"byPrice"}
                    onChange={(e) => handleSelect(e)}
                />

                <div
                    className={`w-fit hidden md:flex flex-row justify-center items-center gap-4 px-2`}
                >
                    <TypeCardButton
                        key="verticalCard"
                        icon={faThLarge}
                        isActive={true}
                        value={"vertical"}
                        onClick={handleSelectCardType}
                    />
                    <TypeCardButton
                        key="horizontalCard"
                        icon={faBars}
                        isActive={false}
                        value={"horizontal"}
                        onClick={handleSelectCardType}
                    />
                </div>
            </div>
        </div>
    )
}