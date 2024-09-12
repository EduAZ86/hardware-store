"use client"
import { FC } from "react";
import { IProductsProps } from "./types";
import { CardControlPanel } from "./CardControlPanel/CardControlPanel";
import { ProductList } from "./ProductList/ProductList";
import { Title } from "../common";
import { useDataProducts } from "@/hooks/products/useDataProducts";

export const Products: FC<IProductsProps> = ({ }) => {

    const { useGetAllProducts } = useDataProducts()
    const { data: dataProducts } = useGetAllProducts()
    console.log("products", dataProducts)
    return (
        <div>
            <Title text="Products" />
            <CardControlPanel />
            <ProductList
                products={dataProducts ? dataProducts?.pages[0].data : []}
            />
        </div>
    )
}