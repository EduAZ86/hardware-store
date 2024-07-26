import { ReactNode } from "react";
import { IBackgroundColorProps } from "../background/types";

export interface IDropDownMenuProps extends Pick<IBackgroundColorProps, "backgroundColor"> {
    children: ReactNode;
    isHovered: boolean;
}