import { FC } from "react";
import { IProductsProps } from "./types";
import { CardControlPanel } from "./CardControlPanel/CardControlPanel";
import { ProductList } from "./ProductList/ProductList";
import { DataProductCard } from "@/types/data.types";
import { Title } from "../common";

export const Products: FC<IProductsProps> = ({ }) => {

    const productsData: DataProductCard[] = [
        {
            id: "asdagtasaar3435",
            title: "Nvidia RTX 3060s Asus Tuff Gaming",
            category: "Graphic Card",
            discount: 0.15,
            image: 'https://dlcdnwebimgs.asus.com/gain/233558c6-999a-4458-98d8-34eac09cb836/w800/fwebp',
            price: 750
        },
        {
            id: "asdagtasaar34assssd5",
            title: "Gigabyte H310M-H",
            category: "Motherboard",
            discount: 0.24,
            image: 'https://static.gigabyte.com/StaticFile/Image/Global/ce86e1476f2d1529ef65fc4382d4d6b4/Product/19318/png/2000',
            price: 83.25454
        },
        {
            id: "asdagtasaar34sdsd3sdsddsd5",
            title: "Intel Core i5 10600f",
            category: "Microprocesador",
            discount: 0,
            image: 'data:image/jpeg;base64,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',
            price: 150.43
        },
        {
            id: "asdagtasaar3435",
            title: "Nvidia RTX 3060s Asus Tuff Gaming",
            category: "Graphic Card",
            discount: 0.15,
            image: 'https://dlcdnwebimgs.asus.com/gain/233558c6-999a-4458-98d8-34eac09cb836/w800/fwebp',
            price: 750
        }, {
            id: "asdagtasaar3435",
            title: "Nvidia RTX 3060s Asus Tuff Gaming",
            category: "Graphic Card",
            discount: 0.15,
            image: 'https://dlcdnwebimgs.asus.com/gain/233558c6-999a-4458-98d8-34eac09cb836/w800/fwebp',
            price: 750
        }, {
            id: "asdagtasaar3435",
            title: "Nvidia RTX 3060s Asus Tuff Gaming",
            category: "Graphic Card",
            discount: 0.15,
            image: 'https://dlcdnwebimgs.asus.com/gain/233558c6-999a-4458-98d8-34eac09cb836/w800/fwebp',
            price: 750
        }
    ]


    return (
        <div>
            <Title text="Products" />
            <CardControlPanel />
            <ProductList
                products={productsData}
            />
        </div>
    )
}