"use client"
import { FC, useEffect, useState } from "react";
import { IProductsProps } from "./types";
import { CardControlPanel } from "./CardControlPanel/CardControlPanel";
import { ProductList } from "./ProductList/ProductList";
import { Title } from "../common";
import { useDataProducts } from "@/hooks/products/useDataProducts";
import { TSortOptions } from "@/types/userInterface.types";
import { useSearchStore } from "@/lib/store/search/useSearchStore";

export const Products: FC<IProductsProps> = ({ }) => {

    const { useGetAllProducts } = useDataProducts()
    const [sortOption, setSortOption] = useState<TSortOptions | undefined>(undefined)
    const { searchTerm } = useSearchStore()
    const { data: dataProducts, refetch: refetchProducts } = useGetAllProducts(sortOption, searchTerm)

    useEffect(() => {
        refetchProducts()
    }, [sortOption, searchTerm])
    return (
        <div>
            <Title text="Products" />
            <CardControlPanel
                setSortOption={setSortOption}
            />
            <ProductList
                products={dataProducts ? dataProducts?.pages[0].data : []}
            />
        </div>
    )
}