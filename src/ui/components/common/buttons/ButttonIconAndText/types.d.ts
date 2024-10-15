import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ButtonHTMLAttributes } from "react";

export interface IButtonIconAndTextProps extends Pick<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
    text: string;
    icon: IconProp;
    isActive: boolean;
}