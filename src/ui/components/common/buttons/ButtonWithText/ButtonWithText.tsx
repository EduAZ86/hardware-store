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
                `w-fit h-fit
                 flex flex-row justify-center 
                 items-center relative 
                 z-0 rounded-xl overflow-hidden 
                 group
                 border-solid border-2 border-light-primary dark:border-dark-primary
                 shadow-lg
                 active:shadow-inner active:scale-[.99]
                 `,
                buttonSize === "small" && "py-1 px-2",
                buttonSize === "middle" && " py-2 px-4 text-sm ",
                buttonSize === "full" && "w-full py-3",
                buttonVariant === "transparent" && "  text-light-primary dark:text-dark-primary group hover:font-bold",
                buttonVariant === "backgroundColor" && ` text-light-background dark:text-light-background  group hover:brightness-110`,
            )}
        >
            <BackgroundColor
                backgroundColor={buttonVariant === "backgroundColor" ? "primary" : "transparent"}
                hoverBackgroundColor={buttonVariant === "backgroundColor" ? "primary" : "transparent"}
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