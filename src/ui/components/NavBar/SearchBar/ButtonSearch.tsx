"use client"
import { FC } from "react";
import { ISearchButtonProps } from "./types";
import { BackgroundColor } from "../../common";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSearchStore } from "@/lib/store/search/useSearchStore";

export const ButtonClear: FC<ISearchButtonProps> = ({
}) => {
    const { clearTerm, searchTerm } = useSearchStore()
    const handleClear = () => {
        clearTerm()
    }
    return (
        <button
            className={
                `flex flex-row relative 
                w-12 h-full
                group 
                text-md justify-center
                 items-center 
                rounded-r-full
                bg-transparent             
                active:scale-95 z-0 overflow-hidden duration-300               
                hover:text-light-background dark:hover:text-dark-background
                ${searchTerm === "" ? "hidden" : "visible"}
                `
            }
            title="clear"
            onClick={handleClear}
        > 
            <FontAwesomeIcon
                icon={faDeleteLeft}
            />
        </button>
    )
}