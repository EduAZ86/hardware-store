import { FC } from "react";
import { ILabelAndValueProps } from "./types";

export const LavelAndValue: FC<ILabelAndValueProps> = ({
    label,
    value,
    large
}) => {
    return (
        <div className={`
            h-10 
            ${large ? "md:col-span-2 col-span-1" : " col-span-1 "}
            flex flex-row justify-start items-center gap-4
        `}>
            <h2 className="text-nowrap">{label+" :"}</h2>
            <h2>{value}</h2>
        </div>
    )
}