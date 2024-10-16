import { TSortOptions } from "@/types/userInterface.types";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ButtonHTMLAttributes, Dispatch, SetStateAction } from "react";

export interface ICardControlPanelProps {
    setSortOption: Dispatch<SetStateAction<TSortOptions | undefined>>
    totalResults: number;
    currentResultsShown: number;
}

export interface IPaginationProps {
    currentStartPage: number;
    lengthResults: number;
}

export interface ITypeCardButtonProps extends Pick<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
    icon: IconProp;
    isActive: boolean;
    value: string;
}