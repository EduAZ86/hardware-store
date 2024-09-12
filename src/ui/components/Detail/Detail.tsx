"use client"
import { FC, useState } from "react";
import { IDetailProps } from "./types";
import { Price } from "../common/typography/Price/Price";
import { useDataProducts } from "@/hooks/products/useDataProducts";
import { ImagesPresenter } from "../ImagesPresenter/ImagesPresenter";
import { BackgroundColor, ButtonWithText, IconButton, InfoCard, PagesTabs, Paragraph, RatingStarts, Title } from "../common";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";


export const ProductDetail: FC<IDetailProps> = ({
    id
}) => {
    const { data: product } = useDataProducts().useGetProductById({ id })
    const [productNumber, setProductNumber] = useState(0)
    const increaseProductNumber = () => {
        if ((product && productNumber < product?.stock)) {
            setProductNumber(productNumber + 1)
        }
    }
    const decreaseProductNumber = () => {
        if (productNumber > 0) {
            setProductNumber(productNumber - 1)
        }
    }

    return (
        <div className="w-full min-h-screen flex flex-col p-2 relative">

            <div className={`
                w-full h-full
                grid sd:grid-cols-1 md:grid-cols-2
                gap-4       
                `}>
                <ImagesPresenter images={product ? product.images : []} />
                <div className={`
                w-full h-full relative flex flex-col gap-4
                `} >
                    <Title text={product ? product.name : ""} />
                    <Paragraph text={product ? ("SKU :" + product.sku) : ""} />
                    <Price price={product ? product.price.price : 0} discount={product ? product.price.percentageDiscount : 0} size="3xl" />
                    <Paragraph text={product && product?.stock > 0 ? "In Stock" : "Out of Stock"} />
                    <div className="w-full flex flex-col items-start gap-2">
                        <div
                            className="w-fit flex relative flex-row justify-center items-center gap-2 rounded-r-full rounded-l-full overflow-hidden p-1 "
                        >
                            <BackgroundColor key={"background"} backgroundColor="acent" opacity="opacity-25" />
                            <IconButton
                                key={"remove"}
                                icon={faMinus}
                                onClick={() => { decreaseProductNumber() }}
                            />
                            <span className="text-2xl">{productNumber}</span>
                            <IconButton
                                key={"add"}
                                icon={faPlus}
                                onClick={() => { increaseProductNumber() }}
                            />
                        </div>
                        <ButtonWithText
                            key={"add-to-cart"}
                            buttonSize="full"
                            textButton="Add to cart"
                            buttonVariant="backgroundColor"
                            onClick={() => { }}
                        />
                        <ButtonWithText
                            key={"buy-now"}
                            buttonSize="full"
                            textButton="buy now"
                            buttonVariant="backgroundColor"
                            onClick={() => { }}
                        />

                    </div>
                </div>
            </div>
            <PagesTabs tabs={[
                {
                    title: "Overview",
                    tab: <div className="w-full relative py-3">
                        <Paragraph text={product ? product.description : ""} />
                    </div>
                },
                {
                    title: "More", tab: <div
                        className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-8 p-4"
                    >
                        <div key={"details"} className="w-full col-span-2"><Title text="Product Details" /></div>
                        <InfoCard key={"brand"} title="Brand" text={product ? product.brand : ""} />
                        <InfoCard key={"category"} title="Category" text={product ? product.category.toUpperCase() : ""} />
                        <InfoCard key={"model"} title="Model" text={product ? product.modelProduct : ""} />
                        <InfoCard key={"release"} title="Released" text={product ? product.releaseDate.toString() : ""} />
                        <InfoCard key={"warranty"} title="Warranty" text={product?.warranty ? product.warranty + " months" : ""} />
                        <InfoCard key={"manufacturer"} title="Manufacturer" text={product ? product.manufacturer : ""} />
                        <div key={"dimensions"} className="w-full col-span-2"><Title text="Dimensions" /></div>
                        <InfoCard key={"weight"} title="Weight" text={product?.dimensions ? product?.dimensions.weight?.toString() as string : ""} />
                        <InfoCard key={"length"} title="Length" text={product?.dimensions ? product?.dimensions.length?.toString() as string : ""} />
                        <InfoCard key={"width"} title="Width" text={product?.dimensions ? product?.dimensions.width?.toString() as string : ""} />
                        <InfoCard key={"height"} title="Height" text={product?.dimensions ? product?.dimensions.height?.toString() as string : ""} />
                    </div>
                },
                {
                    title: "Reviews", tab: <div
                        className="w-full h-60"
                    >
                        <RatingStarts rating={2.5} />
                    </div>
                },
            ]}
            />
        </div>
    )
}