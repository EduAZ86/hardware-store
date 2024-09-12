import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface IIconButtonProps {
    disabled?: boolean;
    icon: IconProp;
    onClick?: () => void;
}