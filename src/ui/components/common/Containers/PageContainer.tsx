import { FC } from "react";
import { IPageContainerProps } from "./types";

export const PageContainer: FC<IPageContainerProps> = ({ children }) => {
    return <main
        className={`
                w-full h-min-screen 
                flex flex-col 
                relative 
                justify-center items-center 
                z-0 py-3
                bg-light-background dark:bg-dark-background
            `}
    >
        {children}
    </main>;
}
