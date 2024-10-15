"use client"
import { FC } from "react";
import { IDropDownMenuProps } from "./types";
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
                absolute left-0 top-full 
                transform ${isHovered ? ' opacity-100' : ' opacity-0 '}
                transition-all duration-500 ease-in-out              
                shadow-lg
                rounded-lg
                overflow-hidden
                p-2                
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