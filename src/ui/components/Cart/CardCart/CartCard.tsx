"use client"
import { FC } from "react"
import { ICartCardProps } from "./types"
import { BackgroundColor, CardTitle, IconButton, Price } from "../../common"
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons"
import { useDataProducts } from "@/hooks/products/useDataProducts"

export const CartCard: FC<ICartCardProps> = ({
    item,
    quantity,
    increaseItem,
    decreaseItem,
    removeItem
}) => {
    const { data: product } = useDataProducts().useGetProductById({ id: item.productID })
    if (!product) {
        return <></>
    }
    return (
        <div
            className={
                `w-full h-fit 
                grid 
                md:grid-cols-5
                grid-cols-2 
                items-center relative gap-2
                border-2 border-light-acent dark:border-dark-acent
                rounded-lg
                p-2
                `}
        >
            <div className=" col-span-2 flex flex-row gap-2 md:px-2 px-1">
                <img
                    src={item.image}
                    className="w-24 h-24 object-cover"
                />
                <CardTitle horientation="left" text={item.name} key={"name"} />
            </div>
            <div className="col-span-1 md:flex hidden">
                <Price key={"price"} price={product ? product.price.price : 0} discount={product ? product.price.percentageDiscount : 0} />
            </div>
            <div className={`
                w-full 
                col-span-1 
                flex felx-row 
                md:justify-end justify-start 
                items-center opacity-80
                `}>
                <div
                    className="w-fit h-12 flex px-2 relative flex-row justify-center items-center gap-2 rounded-r-full rounded-l-full overflow-hidden p-1 "
                >
                    <BackgroundColor key={"background"} backgroundColor="acent" opacity="opacity-25" />
                    {quantity > 1
                        ?
                        <IconButton
                            key={"decreaseQuantity"}
                            icon={faMinus}
                            onClick={() => decreaseItem({ productID: item.productID, quantity: item.quantity - 1 })}
                        />
                        :
                        <IconButton
                            key={"removeItem"}
                            icon={faTrash}
                            onClick={() => removeItem(item.productID)}
                        />
                    }

                    <span className="text-2xl">{quantity}</span>
                    <IconButton
                        key={"increaseQuantity"}
                        icon={faPlus}
                        onClick={() => increaseItem({ productID: item.productID, quantity: item.quantity + 1 })}
                        disabled={!(quantity < product.stock)}
                    />
                </div>
            </div>
            <div className="col-span-1">
                <Price key={"subtotal"} orientation="right" price={product ? (product.price.price - product.price.price * product.price.percentageDiscount / 100) * quantity : 0} discount={0} />
            </div>
        </div>
    )
}