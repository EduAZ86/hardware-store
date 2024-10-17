import { FC } from "react"
import { IIconSocialProps } from "./types"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const IconSocial: FC<IIconSocialProps> = ({
    url,
    icon
}) => {

    return (
        <a
            className="text-light-text dark:text-dark-text hover:text-light-primary hover:dark:text-dark-primary"
            href={url}
            target="_blank"
            rel="noreferrer"
        >
            <FontAwesomeIcon
                className="text-3xl"
                icon={icon}
            />
        </a>
    )
}