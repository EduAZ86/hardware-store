import { FC, ReactNode } from "react";

interface IListLIProps {
    children: ReactNode;
}

export const ListLI: FC<IListLIProps> = ({ children }) => {
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