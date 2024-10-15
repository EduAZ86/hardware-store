import { FC } from "react"
import { IItemsRowProps } from "./types"
export const ItemsRow: FC<IItemsRowProps> = ({
    item
}) => {
    return (
        <div
            className="
                w-full h-20
                grid grid-cols-5
                p-2
                text-light-text dark:text-dark-text
                text-sm font-light
                border-b-2 border-light-acent dark:border-dark-acent
                "
        >
            <img
                src={item.image}
                className="w-10 h-10 object-cover col-span-1"
            />
            <h4 className="col-span-1">{item.quantity}{item.quantity > 1 ? " items" : " item"}</h4>
            <h4 className="col-span-3">{item.name}</h4>
        </div>
    )
}
