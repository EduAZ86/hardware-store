import { IProduct } from "@/types/product.types";
import { Document, model, Model, models, Schema } from "mongoose";

interface IProductDocument extends IProduct, Document { }

const ProductSchema: Schema<IProductDocument> = new Schema<IProductDocument>({
    name: {
        type: String,
        required: [true, "Name is required"],
        maxlength: 25
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        maxlength: 300
    },
    category: {
        type: String,
        required: [true, "Category is required"],
        enum: ['laptop', 'processor', 'graphics', 'memory', 'storage', 'motherboard', 'power supply', 'case', 'monitor', 'keyboard', 'mouse', 'headset', 'speaker', 'casing', 'fan', 'other']
    },
    brand: {
        type: String
    },
    modelProduct: {
        type: String
    },
    sku: {
        required: [true, "Sku is required"],
        type: String
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

export default ProductModel