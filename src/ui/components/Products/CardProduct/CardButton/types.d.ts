import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ButtonHTMLAttributes } from "react";

export interface ICardButtonProps extends Pick <ButtonHTMLAttributes<HTMLButtonElement>, "onClick" >{
    icon:IconProp;
    
}