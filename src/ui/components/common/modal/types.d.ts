import { ReactNode } from "react";

export interface IModalProps {
    isOpen: boolean;
    onCloseModal: () => void;
    title: string;
    children: ReactNode;
}