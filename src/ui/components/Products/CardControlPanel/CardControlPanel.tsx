"use client"
import { FC } from "react";
import { ICardControlPanelProps } from "./types";
import { TypeCardButton } from "./TypeCardButton";
import { PaginationIndex } from "./PaginationIndex";
import { TOption } from "../../common/selects/types";
import { BasicSelect } from "../../common/selects/BasicSelect";
import { faBars, faThLarge, } from "@fortawesome/free-solid-svg-icons";


export const CardControlPanel: FC<ICardControlPanelProps> = ({ }) => {

    const sortPriceOption1: TOption = {
        disabled: false,
        id: "",
        label: "low to high",
        value: "up"
    }
    const sortPriceOption2: TOption = {
        disabled: false,
        id: "",
        label: "low to high",
        value: "down"
    }

    const sortDiscountOption1: TOption = {
        disabled: false,
        id: "",
        label: 'highest to lowest',
        value: "up"
    }
    const sortDiscountOption2: TOption = {
        disabled: false,
        id: "",
        label: 'smallest to largest',
        value: "down"
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
                flex flex-row
                items-center
                justify-around
                border-solid border-b-[1px] border-light-primary dark:border-dark-primary
            `}
        >
            <PaginationIndex
                currentStartPage={2}
                lengthPage={20}
                lengthResults={450}
            />
            <div
                className={`
                    flex flex-row relative items-center gap-3
                `}
            >
                <span
                    className="text-sm text-start text-light-text dark:text-dark-text"
                >
                    Sort by
                </span>

                <BasicSelect
                    options={[sortPriceOption1, sortPriceOption2]}
                    placeholder="price"
                    key={"byPrice"}
                />
                <BasicSelect
                    options={[sortDiscountOption1, sortDiscountOption2]}
                    placeholder="discount"
                    key={"byDiscount"}
                />
                <div
                    className={`w-fit flex flex-row justify-center items-center gap-4 px-2`}
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