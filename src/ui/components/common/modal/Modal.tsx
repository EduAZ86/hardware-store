import { FC } from "react"
import { IModalProps } from "./types"
import { Title } from "../typography"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faX } from "@fortawesome/free-solid-svg-icons"
import { BackgroundColor } from "../background"

export const Modal: FC<IModalProps> = ({
    isOpen,
    title,
    onCloseModal,
    children }) => {
    return (
        <div
            className={`
            ${isOpen ? "fixed" : "hidden"}
            w-full h-full h-max-screen
            top-0 left-0
            flex flex-col 
            justify-center items-center
            bg-black bg-opacity-50
            p-4
            z-50
        `}
        >
            <div
                className="w-full h-16 flex flex-row justify-between relative items-center p-4 rounded-t-lg overflow-hidden"
            >
                <Title text={title} />
                <BackgroundColor key={"header"} backgroundColor="acent" />
                <button
                    className={` 
                        text-xl text-light-secondary dark:text-dark-secondary
                        `}
                    onClick={onCloseModal}>
                    <FontAwesomeIcon icon={faX} />
                </button>
            </div>
            <div
                className="w-full h-fit max-h-[calc(100vh-100px)] flex relative p-4 rounded-b-lg">
                <BackgroundColor key={"body"} backgroundColor="acent" />
                {children}
            </div>
        </div>

    )
}
