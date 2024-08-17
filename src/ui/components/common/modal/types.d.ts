import { ReactNode } from "react";

export interface IModalProps {
    isOpen: boolean;
    title: string;
    children: ReactNode;
}