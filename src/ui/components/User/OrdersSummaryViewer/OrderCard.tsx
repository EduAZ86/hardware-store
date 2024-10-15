import { IOrder } from "@/types/order.types"
import { FC } from "react"
import { IOrderCardProps } from "./types"
import { Price } from "../../common"
import { LavelAndValue } from "./LabelAndValue"
import { priceFormatter } from "../../common/typography/Price/priceFormater"
import { ItemsTable } from "./ItemsTable"
import { ICartItemResponse } from "@/types/cart.types"

export const OrderCard: FC<IOrderCardProps> = ({
    order
}) => {

    return (
        <div className={`
            w-full 
            flex flex-col 
            justify-between 
            border-2 
            p-2
            rounded-lg        
            border-light-acent dark:border-dark-acent 
        `}>
            <div className="grid grid-cols-2 h-fit w-full">
                <LavelAndValue key={"User Name"} label={"User Name"} value={order.userName} />
                <LavelAndValue key={"orderID"} label={"Order ID"} value={order._id} />
                <LavelAndValue key={"createdAt"} label={"Date"} value={order.createdAt} />
                <LavelAndValue key={"address"} label={"Address"} value={order.shippingData?.address} />
                <LavelAndValue key={"city"} label={"City"} value={order.shippingData?.city} />
                <LavelAndValue key={"country"} label={"Country"} value={order.shippingData?.country} />
                <LavelAndValue key={"postalCode"} label={"Postal Code"} value={order.shippingData?.postalCode} />
                <LavelAndValue key={"phoneNumber"} label={"Phone"} value={order.phoneNumber} />
                <LavelAndValue key={"email"} label={"Email"} value={order.email} />
                <LavelAndValue key={"paymentStatus"} label={"Payment"} value={order.payment?.paymentMethod} />
                <LavelAndValue key={"status"} label={"Status"} value={order.status} />
                <LavelAndValue key={"orderNotes"} label={"Notes"} value={order.orderNotes} large />
            </div>
            <ItemsTable items={order.items as ICartItemResponse[]} totalPrice={order.totalAmount as number} />
        </div>
    )
}