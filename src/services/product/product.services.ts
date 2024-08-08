import ProductModel from "@/models/product"
import { IProduct } from "@/types/product.types"
import { ProductPartialSchema, ProductSchema } from "./validation.schema"


export const getProducts = async (lengthPage: string, offset: string) => {
    const data = await ProductModel.find()
        .skip(Number(offset))
        .limit(Number(lengthPage))
        .lean()
    return data
}

export const postNewProduct = async (productData: IProduct) => {
    const parsedProduct = ProductSchema.parse(productData);
    const newProduct = new ProductModel({
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

