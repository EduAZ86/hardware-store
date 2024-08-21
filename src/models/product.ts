import { IProduct } from "@/types/product.types";
import { Document, model, Model, models, Schema } from "mongoose";

interface IProductDocument extends IProduct, Document { }

const ProductSchema: Schema<IProductDocument> = new Schema<IProductDocument>({
    name: {
        type: String,
        required: [true, "Name is required"],
        maxlength: 100,
        unique: true
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        maxlength: 500
    },
    category: {
        type: String,
        required: [true, "Category is required"],
        enum: ['laptop', 'processor', 'graphics', 'memory', 'storage', 'motherboard', 'power supply', 'case', 'monitor', 'keyboard', 'mouse', 'headset', 'speaker', 'casing', 'fan', 'other']
    },
    brand: {
        type: String,
        required: [true, "Brand is required"]
    },
    modelProduct: {
        type: String,
        required: [true, "Model is required"]
    },
    sku: {
        required: [true, "Sku is required"],
        type: String,
        unique: true
    },
    price: {
        price: {
            type: Number,
            required: [true, "Price is required"]
        },
        percentageDiscount: {
            type: Number
        },
        descriptionDiscount: {
            type: String
        }
    },
    releaseDate: {
        type: Date
    },
    images: {
        type: [String],
        required: [true, "Images are required"]
    },
    averageRating: {
        type: Number
    },
    dimensions: {
        length: {
            type: Number
        },
        width: {
            type: Number
        },
        height: {
            type: Number
        },
        weight: {
            type: Number
        }
    },
    warranty: {
        type: String
    },
    manufacturer: {
        type: String
    },
    stock: {
        type: Number,
        required: [true, "Stock is required"]
    }
}, {
    timestamps: true
})

const ProductModel: Model<IProductDocument> = models.Product || model<IProductDocument>('Product', ProductSchema);
// const ProductModel: Model<IProductDocument> = model<IProductDocument>('Product', ProductSchema);


export default ProductModel