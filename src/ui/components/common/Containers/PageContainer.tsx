import { FC } from "react";
import { IPageContainerProps } from "./types";

export const PageContainer: FC<IPageContainerProps> = ({ children }) => {
    return <div
        className={`
                w-full 
                flex flex-col 
                relative     
                z-0 py-3
                bg-light-background dark:bg-dark-background
            `}
    >
        {children}
    </div>;
}
