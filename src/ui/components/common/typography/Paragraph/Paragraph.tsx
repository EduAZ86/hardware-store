import { FC } from "react"
import { IParagraphProps } from "./types"

export const Paragraph: FC<IParagraphProps> = ({
    text
}) => {
    return (
        <p
            className={`
                text-light-text dark:text-dark-text
                w-full h-fit text-lg text-justify px-3
            `}
        >
            {text}
        </p>
    )
}