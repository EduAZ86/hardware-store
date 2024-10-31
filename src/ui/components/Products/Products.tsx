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
    const {
        data: dataProducts,
        refetch: refetchProducts,
    } = useGetAllProducts(sortOption, searchTerm);

    useEffect(() => {
        refetchProducts()
    }, [sortOption, searchTerm])

    const currentResultsShown = dataProducts
        ? dataProducts.pages.reduce((total, page) => total + page.data.length, 0)
        : 0;

    return (
        <div>           
            <CardControlPanel
                setSortOption={setSortOption}
                totalResults={dataProducts?.pages[0].totalResults || 0}
                currentResultsShown={currentResultsShown}
            />
            {dataProducts &&
                <ProductList
                    products={dataProducts.pages.map((page) => page.data).flat()}
                />
            }
        </div>
    )
}