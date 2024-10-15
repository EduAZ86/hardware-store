import { optionButtonSelect } from "../types";

export interface IProfileCardProps {
    userName: string;
    email: string;
    imageProfile?: string;
    handleSelect: (buttonId: optionButtonSelect) => void;
    currentSelected: optionButtonSelect;
}