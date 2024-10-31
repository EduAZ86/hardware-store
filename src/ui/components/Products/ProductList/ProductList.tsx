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
                grid 
                grid-cols-2
                md:grid-cols-3
                lg:grid-cols-4
                xl:grid-cols-5
                2xl:grid-cols-6
                items-center
                justify-items-center                
                md:gap-4 gap-x-2 
                bg-light-background dark:bg-dark-background
                p-2
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