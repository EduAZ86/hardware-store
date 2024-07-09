import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { ICardButtonProps } from "./types";

export const CardButton: FC<ICardButtonProps> = ({
    icon,
    onClick
}) => {
    return (
        <button
            onClick={onClick}
            className={`
            w-10 h-10
            flex flex-row items-center justify-center relative
            rounded-full
            border-solid border-2 border-light-primary dark:border-dark-primary
            bg-light-text dark:bg-dark-text
            text-light-primary dark:text-dark-primary
            hover:bg-light-primary dark:hover:bg-dark-primary
            hover:text-light-text  dark:hover:text-dark-text
            text-lg text-center
            active:scale-95
        `}
        >
            <FontAwesomeIcon icon={icon} />
        </button>
    )
}