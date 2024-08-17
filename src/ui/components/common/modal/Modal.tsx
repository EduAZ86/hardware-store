import { FC } from "react"
import { IModalProps } from "./types"
import { Title } from "../typography"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCross } from "@fortawesome/free-solid-svg-icons"
import { useUIStore } from "@/lib/store/userInterface/useUIStore"

export const Modal: FC<IModalProps> = ({
    isOpen,
    title,
    children }) => {
    const { onCloseModal } = useUIStore();
    return (
        <div
            className={`   
                ${isOpen ? "fixed" : "hidden"}
                top-0 left-0 right-0 bottom-0
                w-11/12 h-full
                flex flex-col
                justify-center items-center
                bg-light-acent dark:bg-dark-acent
            `}
        >
            <div
                className="w-full h-16 flex flex-row justify-between items-center p-4"
            >
                <Title text={title} />
                <button
                    className={` 
                        text-xl text-light-secondary dark:text-dark-secondary
                        `}
                    onClick={onCloseModal}>
                    <FontAwesomeIcon icon={faCross} />
                </button>
            </div>
            {children}
        </div>

    )
}
