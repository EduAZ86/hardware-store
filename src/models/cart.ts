import { Document, model, Model, models, Schema } from "mongoose";
import { ICart, ICartItem } from "@/types/cart.types";

interface ICartDocument extends Omit<ICart, 'userID'>, Document {
    userID: Schema.Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
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
    status: {
        type: String,
        enum: ['active', 'completed', 'cancelled'],
        default: 'active'
    }
}, {
    timestamps: true
});

const CartModel: Model<ICartDocument> = models.Cart || model<ICartDocument>('Cart', CartSchema);

export default CartModel;
