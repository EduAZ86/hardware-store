import { FC, ReactNode } from "react";

interface IListProps {
    children: ReactNode;
}

export const ListLI: FC<IListProps> = ({ children }) => {
    return (
        <li
            className={`
                text-light-text dark:text-dark-text
                text-sm
                list-none
                cursor-pointer
                hover:text-light-acent hover:dark:text-dark-acent
                flex flex-row gap-2
            `}
        >
            {children}
        </li>
    )
}