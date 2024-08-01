"use client"
import { FC } from "react";
import { ISearchButtonProps } from "./types";
import { BackgroundColor } from "../../common";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ButtonSearch: FC<ISearchButtonProps> = ({
    onClick
}) => {
    return (
        <button
            className={
                `flex flex-row relative 
                w-12 h-full
                group 
                text-md justify-center
                 items-center 
                 md:rounded-r-lg rounded-none
                
                active:scale-95 z-0 overflow-hidden duration-300`
            }
            title="search"
            onClick={onClick}
        >
            <BackgroundColor
                backgroundColor="secondary"
                hoverBackgroundColor="text"
               opacity="opacity-100"
               hoverOpacity="opacity-100"
            />
            <FontAwesomeIcon
                icon={faSearch}
            />
        </button>
    )
}