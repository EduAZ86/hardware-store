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
                 bg-transparent
                  px-4
                border-none
                rounded-l-full
                text-light-text dark:text-dark-text
                focus:outline-none 
                `
            }
            placeholder="Search products"
            type="text"

        />
    )
}