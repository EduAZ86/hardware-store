import { ReactNode } from "react";

type TTab = {   
    title: string;
    tab: ReactNode;
}

export interface IPagesTabsProps {
    tabs: TTab[];
}