import { FC } from "react";
import { IPaginationProps } from "./types";

export const PaginationIndex: FC<IPaginationProps> = ({
    currentStartPage,
    lengthResults
}) => {
    return (
        <span
            className="text-sm text-start text-light-text dark:text-dark-text"
        >
            Showing {`${currentStartPage.toString()}  of ${lengthResults.toString()}`}
        </span>
    )
}