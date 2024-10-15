import ProductModel from "@/models/product"
import { ProductPartialSchema, ProductSchema } from "./validation.schema"
import { TSortOptions } from "@/types/userInterface.types"
import { sortOptions } from "./sortOptions"
import { IProduct } from "@/types/product.types"
import { SortOrder } from "mongoose"


export const getProducts = async (
    lengthPage: string,
    offset: string,
    sortOption?: TSortOptions,
    searchTerm?: string
) => {
    const defaultSort: { [key: string]: SortOrder } = { createdAt: -1 };
    const sortCriteria = sortOption ? sortOptions[sortOption] : defaultSort;
    const searchFilter = searchTerm
        ? {
            $or: [
                { name: { $regex: searchTerm, $options: "i" } },
                { category: { $regex: searchTerm, $options: "i" } },
                { brand: { $regex: searchTerm, $options: "i" } },
                { description: { $regex: searchTerm, $options: "i" } }
            ]
        }
        : {};

    const data = await ProductModel.find(searchFilter)
        .skip(Number(offset))
        .limit(Number(lengthPage))
        .sort(sortCriteria)
    return data
}

export const getAllInventary = async () => {
    const data = await ProductModel.find()
        .lean()
    return data
}

export const postNewProduct = async (productData: IProduct) => {
    const fonundProductSKU = await ProductModel.findOne({ sku: productData.sku })
    const fonundProductName = await ProductModel.findOne({ name: productData.name })
    if (fonundProductSKU) throw new Error('SKU Product already exists');
    if (fonundProductName) throw new Error('Name Product already exists');

    const parsedProduct = ProductSchema.parse(productData);
    const newProduct = new ProductModel({
        name: parsedProduct.name,
        description: parsedProduct.description,
        category: parsedProduct.category,
        brand: parsedProduct.brand,
        modelProduct: parsedProduct.modelProduct,
        sku: parsedProduct.sku,
        price: parsedProduct.price,
        releaseDate: parsedProduct.releaseDate,
        images: parsedProduct.images,
        averageRating: parsedProduct.averageRating,
        dimensions: parsedProduct.dimensions,
        warranty: parsedProduct.warranty,
        manufacturer: parsedProduct.manufacturer,
        stock: parsedProduct.stock
    })
    await newProduct.save();
    return newProduct
}

export const getProductsByProductID = async (productID: string) => {
    const data = await ProductModel.findOne({ _id: productID })
        .lean()
    if (!data) throw new Error('Product not found');
    return data
}

export const deleteProduct = async (productID: string) => {
    const fonundProduct = await ProductModel.findOne({ _id: productID })
        .lean()
    if (!fonundProduct) throw new Error('Product not found');
    const data = await ProductModel.findByIdAndDelete(productID)
    return data
}

export const updateProduct = async (productID: string, productData: Partial<IProduct>) => {
    const parsedProduct = ProductPartialSchema.parse(productData);
    const fonundProduct = await ProductModel.findOne({ _id: productID })
        .lean()
    if (!fonundProduct) throw new Error('Product not found');
    const data = await ProductModel.findByIdAndUpdate(productID, {
        ...parsedProduct
    }, { new: true })
    return data
}

