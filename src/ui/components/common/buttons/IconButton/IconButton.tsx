import { FC } from "react"
import { IIconButtonProps } from "./types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const IconButton: FC<IIconButtonProps> = ({
    icon,
    disabled,
    onClick
}) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={`
                w-10 h-10 flex items-center justify-center
                rounded-full
                bg-light-primary dark:bg-dark-primary
                hover:bg-light-secondary dark:hover:bg-dark-secondary
                text-dark-text dark:text-dark-text
                ${!disabled &&  "active:scale-[.98] active:shadow-inner" }
                disabled:cursor-not-allowed
                shadow-lg
                `
            }
        >
            <FontAwesomeIcon icon={icon} />
        </button>
    )
}