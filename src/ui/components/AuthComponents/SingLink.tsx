import { FC } from "react";
import { ISingProps } from "./types";
import Link from "next/link";

export const SingLink: FC<ISingProps> = ({
    href,
    text,
    linkText
}) => {
    return (
        <span
            className="text-light-text dark:text-dark-text text-center text-xs"
        >
            {text} <Link className={
                `text-light-text dark:text-dark-text font-semibold
                
                hover:text`
                
                } href={href} >{linkText}</Link>
        </span>
    )
}