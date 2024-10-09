import { FC } from "react"
import { IShowOrderDataProps } from "./types"

export const ShowOrderData: FC<IShowOrderDataProps> = ({
    order
}) => {
    const keyValueArray = Object.entries(order).map(([key, value]) => {
        if (key === "items") return { key: "item", value: "" }
        if (typeof value === 'object' && !Array.isArray(value)) {
            return Object.entries(value).map(([nestedKey, nestedValue]) => ({
                key: nestedKey,
                value: nestedValue
            }));
        }
        return { key, value };
    }).flat();
     return (
        <div
            className={`
            w-full h-full
            flex flex-col            
            bg-light-acent dark:bg-dark-acent
            p-3 rounded-md
            `}
        >
            <h3 className="text-dark-text dark:text-light-text text-lg text-center pt-4">Shipping data</h3>
            {keyValueArray?.map((item, index) => (
                <div key={index}>
                    {(
                        item.key === "item" ||
                        item.key === "orderNotes" ||
                        item.key === "totalAmount" ||
                        item.key === "paymentStatus"||
                        item.key === "status"||
                        item.key === "paymentMethod"||
                        item.key === "userID")
                        ?
                        <></>
                        :
                        <div
                            className="w-full h-10 flex flex-row items-center justify-between"
                            key={index}
                        >
                            <p>{item.key} :</p>
                            <p>{item.value}</p>
                        </div>
                    }
                </div>
            ))}
        </div>
    )
}