import { FC } from "react"
import { IItemsTableProps } from "./types"
import { ItemsRow } from "./ItemsRow"
import { Price } from "../../common"

export const ItemsTable: FC<IItemsTableProps> = ({
    items,
    totalPrice
}) => {
    return (
        <div className={
            `w-full h-full
             flex flex-col 
             items-start justify-center
             p-2 rounded-lg
             border-2 border-light-acent dark:border-dark-acent             
             `
        }
        >
            <h2 className="text-light-text dark:text-dark-text text-xl font-medium">Items</h2>
            {items.map((item, index) => (
                <ItemsRow
                    key={index}
                    item={item}
                />
            ))}
            <div className="w-full h-10 flex flex-row justify-between items-center gap-4">
                <h4 className="text-light-text dark:text-dark-text text-lg font-medium">Total</h4>
                <Price price={totalPrice}/>
            </div>
        </div>
    )
}