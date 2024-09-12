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
            className="
                w-full h-fit grid grid-cols-5 items-center relative "
        >
            <div className=" col-span-2 flex flex-row">
                <img
                    src={item.image}
                    className="w-24 h-24 object-cover"
                />
                <CardTitle text={item.name} />
            </div>
            <Price key={"price"} price={product ? product.price.price : 0} discount={product ? product.price.percentageDiscount : 0} />
            <div className="col-span-1 flex w-full justify-center items-center opacity-80">
                <div
                    className="w-fit h-12 flex px-2 relative flex-row justify-center items-center gap-2 rounded-r-full rounded-l-full overflow-hidden p-1 "
                >
                    <BackgroundColor key={"background"} backgroundColor="acent" opacity="opacity-25" />
                    {quantity > 1
                        ?
                        <IconButton
                            key={"decreaseQuantity"}
                            icon={faMinus}
                            onClick={() => decreaseItem(item.productID)}
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
                        onClick={() => increaseItem(item.productID, product ? product.stock : 0)}
                        disabled={!(quantity < product.stock)}
                    />
                </div>
            </div>
            <Price key={"subtotal"} price={product ? (product.price.price - product.price.price * product.price.percentageDiscount / 100) * quantity : 0} discount={0} />
        </div>
    )
}