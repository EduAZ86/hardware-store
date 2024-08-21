'use client'
import { FC, useEffect } from "react";
import { ButtonWithText, InputTextArea, Title } from "../common";
import { BasicForm } from "../common/forms";
import { InputField } from "../common/Inputs/InputField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Select } from "../common/selects/Select/Select";
import { categoryOptions } from "./constants";
import { ImageLoader } from "./ImageLoader";
import { validationSchema } from "./validationSchema";
import { DimensionProductInputs } from "./DimensionProductInputs";
import { useDataProducts } from "@/hooks/products/useDataProducts";
import { IProduct } from "@/types/product.types";
import { IUpdateDataProductsProps } from "./types";



export const UpdateDataProducts: FC<IUpdateDataProductsProps> = ({
    variant,
   
    ProductID
}) => {

    const { mutate: createProduct, isPending: isPendingCreate } = useDataProducts().useCreateProduct()
    const { mutate: updateProduct, isPending: isPendingUpdate } = useDataProducts().useUpdateProduct()
    const { data: product } = useDataProducts().useGetProductById({ id: (variant === "update" && ProductID) ? ProductID as string : '' })

    const { handleSubmit, register, reset, formState: { errors }, watch } = useForm(
        {
            resolver: zodResolver(validationSchema)
        }
    )

    useEffect(() => {
        reset({
            name: product?.name,
            category: product?.category,
            description: product?.description,
            brand: product?.brand,
            price: product?.price.price,
            descriptionDiscount: product?.price.descriptionDiscount,
            percentageDiscount: product?.price.percentageDiscount,
            length: product?.dimensions ? product?.dimensions.length : 0,
            width: product?.dimensions ? product?.dimensions.width : 0,
            height: product?.dimensions ? product?.dimensions.height : 0,
            weight: product?.dimensions ? product?.dimensions.weight : 0,
            modelProduct: product?.modelProduct,
            releaseDate: product?.releaseDate,
            sku: product?.sku,
            averageRating: product?.averageRating,
            warranty: product?.warranty,
            manufacturer: product?.manufacturer,
            stock: product?.stock,
            "image-1": product?.images ? product?.images[0] : '',
            "image-2": product?.images ? product?.images[1] : '',
            "image-3": product?.images ? product?.images[2] : '',
            "image-4": product?.images ? product?.images[3] : '',
            "image-5": product?.images ? product?.images[4] : '',
        })
    }, [product, reset, variant])




    const onSubmit = handleSubmit(async (data) => {

        console.log("data", data);

        const newProduct: IProduct = {
            name: data.name,
            category: data.category,
            description: data.description,
            brand: data.brand,
            price: {
                descriptionDiscount: data.descriptionDiscount,
                percentageDiscount: data.percentageDiscount,
                price: data.price
            },
            dimensions: {
                length: data.length,
                width: data.width,
                height: data.height,
                weight: data.weight
            },
            images: [data["image-1"], data["image-2"], data["image-3"], data["image-4"], data["image-5"]],
            modelProduct: data.modelProduct,
            releaseDate: data.releaseDate,
            sku: data.sku,
            averageRating: data.averageRating,
            warranty: data.warranty,
            manufacturer: data.manufacturer,
            stock: data.stock
        }
        console.log(data)

        if (variant === "update") {
            updateProduct({ id: ProductID as string, updatedProduct: newProduct }, {
                onSuccess: () => {
                    reset()
                }
            })
        }

        if (variant === "create") {
            createProduct(newProduct, {
                onSuccess: () => {
                    reset()
                }
            })
        }
    })

    return (
        <div
            className={`
                w-full h-fit
                flex relative
                flex-col
                px-6                
                `}
        >
            <Title
                text={product ? product.name : ""}
            />
            <BasicForm
                onSubmit={onSubmit}
                name="createProduct"
            >
                <div
                    className={`
                        w-full
                        grid
                        grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
                        justify-items-center
                        gap-4
                    `}
                >
                    <InputField
                        key={"Product Name"}
                        label={"Product Name"}
                        disabled={false}
                        id="name"
                        name="name"
                        placeholder="product name"
                        type="text"
                        register={register}
                        errors={errors}
                        requiredMessage="Product name is required"
                    />
                    <Select
                        key={"Category"}
                        title={"Category"}
                        name="category"
                        placeholder="category of the product"
                        register={register}
                        errors={errors}
                        options={categoryOptions}
                    />

                    <InputField
                        key={"brand"}
                        label={"Brand"}
                        disabled={false}
                        id="brand"
                        name="brand"
                        placeholder="brand of the product"
                        type="text"
                        register={register}
                        errors={errors}
                        requiredMessage="Brand is required"
                    />

                    <InputField
                        key={"Product model"}
                        label={"Product model"}
                        disabled={false}
                        id="modelProduct"
                        name="modelProduct"
                        placeholder="model of the product"
                        type="text"
                        register={register}
                        errors={errors}
                        requiredMessage="Product model is required"
                    />

                    <InputField
                        key={"sku"}
                        label={"SKU"}
                        disabled={false}
                        id="sku"
                        name="sku"
                        placeholder="sku of the product"
                        type="text"
                        register={register}
                        errors={errors}
                        requiredMessage="Product sku is required"
                    />
                    <InputField
                        key={"price"}
                        label={"Price"}
                        disabled={false}
                        id="price"
                        name="price"
                        placeholder="price of the product"
                        type="number"
                        register={register}
                        errors={errors}
                        requiredMessage="Product price is required"
                    />
                    <InputField
                        key={"percentage discount"}
                        label={"Percentage discount"}
                        disabled={false}
                        id="percentageDiscount"
                        name="percentageDiscount"
                        placeholder="percentage discount of the product"
                        type="number"
                        register={register}
                        errors={errors}
                        requiredMessage="Product percentage discount is required"
                    />
                    <InputField
                        key={"description discount"}
                        label={"Description discount"}
                        disabled={false}
                        id="descriptionDiscount"
                        name="descriptionDiscount"
                        placeholder="description discount of the product"
                        type="text"
                        register={register}
                        errors={errors}
                    />
                    <InputField
                        key={"stock"}
                        label={"Stock"}
                        disabled={false}
                        id="stock"
                        name="stock"
                        placeholder="stock of the product"
                        type="number"
                        register={register}
                        errors={errors}
                        requiredMessage="Product stock is required"
                    />
                    <InputField
                        key={"release date"}
                        label={"Release date"}
                        disabled={false}
                        id="releaseDate"
                        name="releaseDate"
                        placeholder="release date of the product"
                        type="date"
                        register={register}
                        errors={errors}
                        requiredMessage="Product release date is required"
                    />

                    <InputField
                        key={"average rating"}
                        label={"Average rating"}
                        disabled={false}
                        id="average_rating"
                        name="average_rating"
                        placeholder="average rating of the product"
                        type="range"
                        step={0.5}
                        max={5}
                        register={register}
                        errors={errors}
                        watch={watch}
                        requiredMessage="Product average rating is required"
                    />
                    <InputField
                        key={"warranty"}
                        label={"Warranty"}
                        disabled={false}
                        id="warranty"
                        name="warranty"
                        placeholder="warranty of the product"
                        type="number"
                        register={register}
                        errors={errors}
                        requiredMessage="Product warranty is required"
                    />
                    <InputField
                        key={"manufacturer"}
                        label={"Manufacturer"}
                        disabled={false}
                        id="manufacturer"
                        name="manufacturer"
                        placeholder="manufacturer of the product"
                        type="text"
                        register={register}
                        errors={errors}
                        requiredMessage="Product manufacturer is required"
                    />
                    <InputTextArea
                        key={"Description"}
                        label={"Description"}
                        cols={50}
                        rows={5}
                        disabled={false}
                        id="description"
                        name="description"
                        placeholder="description of the product"
                        type="text"
                        register={register}
                        errors={errors}
                        requiredMessage="Description is required"
                    />
                    <DimensionProductInputs
                        errors={errors}
                        register={register}
                    />
                    <ImageLoader
                        register={register}
                        watch={watch}
                        errors={errors}
                    />
                </div>
                <ButtonWithText
                    textButton={variant === "update" ? "Update" : "Create"}
                    type="submit"
                    buttonSize="full"
                    buttonVariant="backgroundColor"
                    loading={variant === "update" ? isPendingUpdate : isPendingCreate}
                />
            </BasicForm>
        </div>
    )
}