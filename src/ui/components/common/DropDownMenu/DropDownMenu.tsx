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
                ${isHovered ? 'md:block hidden' : ' hidden'}  
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