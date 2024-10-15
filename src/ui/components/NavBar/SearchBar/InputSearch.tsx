"use client"
import { FC } from "react";
import { IInputSearchProps } from "./types";
import { useSearchStore } from "@/lib/store/search/useSearchStore";

export const InputSearch: FC<IInputSearchProps> = ({
}) => {
    const { setSearchTerm, searchTerm } = useSearchStore()

    return (
        <input
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            className={
                `w-full h-full
                 bg-light-background dark:bg-dark-background border-l-2 px-4
                border-none
                rounded-l-lg
                text-light-text dark:text-dark-text
                focus:outline-none focus:ring-1 focus:ring-light-secondary dark:focus:ring-dark-secondary 
                `
            }
            placeholder="Search products"
            type="text"

        />
    )
}