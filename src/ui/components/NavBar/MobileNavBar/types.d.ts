import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface IMobileNavBarProps {
    children: ReactNode;
}

export interface INavLinkButtonProps {
    icon: IconProp;
    href: string;
    isCurrentSelected: boolean;
    rounded?: boolean;
}

export interface INavigationBarProps {
    userID: string;
    currentPath: string;
}