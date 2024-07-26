"use client"
import { FC } from "react";
import { IDropDownMenuProps } from "./types";
import { twJoin } from "tailwind-merge";
import { BackgroundColor } from "../background";

export const DropDownMenu: FC<IDropDownMenuProps> = ({
    children,
    isHovered,
    backgroundColor
}) => {
    return (
        <div
            className={
                `
                w-full
                absolute left-0 -bottom-0
                transform ${isHovered ? 'translate-y-full opacity-100 z-0' : '-translate-y-0 opacity-0 -z-10'}
                transition-all duration-300 ease-in-out              
                shadow-lg
                rounded-sm
                p-4
            `
            }
        >
            <BackgroundColor
                backgroundColor={backgroundColor}
            />
            {children}
        </div>
    )
}