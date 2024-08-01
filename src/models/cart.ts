import { ICart, ICartItem } from "@/types/cart.types";
import { Document, model, Model, models, Schema } from "mongoose";

interface ICartDocument extends Omit<ICart, 'userID'>, Document {
    userID: Schema.Types.ObjectId;
}

interface ICartItemDoc extends Omit<ICartItem, 'productID'> {
    productID: Schema.Types.ObjectId;
}

const CartItemSchema: Schema<ICartItemDoc> = new Schema<ICartItemDoc>({
    productID: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    subTotalPrice: {
        type: Number,
        required: true
    }
});

const CartSchema: Schema<ICartDocument> = new Schema<ICartDocument>({

    userID: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    items: {
        type: [CartItemSchema],
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    totalQuantity: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['active', 'completed', 'cancelled'],
        default: 'active'
    }
}, {
    timestamps: true
});

const CartModel: Model<ICartDocument> = models.Cart || model<ICartDocument>('Cart', CartSchema);

export default CartModel