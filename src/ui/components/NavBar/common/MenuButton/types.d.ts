import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface IMenuButtonProps {
    disabled?: boolean;
    icon: IconProp;
    onClick?: () => void;
    isActive: boolean;
    isAuthenticated: boolean;
}