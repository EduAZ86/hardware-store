import { FC } from "react";
import { IButtonWithTextProps } from "./types";
import { TextBtn } from "../../typography";
import { BackgroundColor } from "../../background";
import { twJoin } from "tailwind-merge";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ButtonWithText: FC<IButtonWithTextProps> = ({
    textButton,
    buttonVariant,
    buttonSize,
    loading,
    type,
    ...otherButtonProps
}) => {
    return (
        <button
            type={type}
            {...otherButtonProps}
            className={twJoin(
                "w-fit h-fit flex flex-row justify-center items-center relative z-0 rounded-md overflow-hidden group active:scale-95",
                buttonSize === "small" && "py-1 px-2",
                buttonSize === "middle" && " py-2 px-4 text-sm ",
                buttonSize === "full" && "w-full py-3",
                buttonVariant === "transparent" && "border-solid border-2 border-light-primary dark:border-dark-primary text-light-primary dark:text-dark-primary",
                buttonVariant === "backgroundColor" && ` text-light-text dark:text-dark-text  group hover:text-light-primary dark:hover:text-dark-primary`
            )}
        >
            <BackgroundColor
                backgroundColor={buttonVariant === "backgroundColor" ? "primary" : "transparent"}
                hoverBackgroundColor={"text"}
            />
            {loading
                ?
                <svg className="animate-spin h-5 w-5 "><FontAwesomeIcon icon={faSpinner} /></svg>
                :
                <TextBtn text={textButton} />
            }
        </button>
    )
}