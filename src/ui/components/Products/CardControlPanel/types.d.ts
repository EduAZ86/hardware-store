import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ButtonHTMLAttributes } from "react";

export interface ICardControlPanelProps {

}

export interface IPaginationProps {
    currentStartPage: number;
    lengthPage: number;
    lengthResults: number;
}

export interface ITypeCardButtonProps extends Pick<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
    icon: IconProp;
    isActive: boolean;
    value: string;
}