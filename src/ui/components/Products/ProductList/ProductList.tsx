import { FC } from "react";
import { IListProductProps } from "./types";
import { CardProduct } from "../CardProduct/CardProduct";

export const ProductList: FC<IListProductProps> = ({
    products
}) => {
    return (
        <div
            className={`
                w-full h-fit
                flex flex-row flex-wrap
                items-start gap-4 p-2
            `}
        >
            {products.map((product, index) => {
                return (
                    <CardProduct
                        key={`${index}-${product._id}`}
                        dataProduct={product}
                    />
                )
            })}
        </div>
    )
}