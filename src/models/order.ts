import { IOrder } from "@/types/order.types";
import { Document, model, Model, models, Schema } from "mongoose";

interface IOrderDocument extends Omit<IOrder, 'userID' | 'cartID'>, Document {
    userID: Schema.Types.ObjectId;
    cartID: Schema.Types.ObjectId;
}

const OrderSchema: Schema<IOrderDocument> = new Schema<IOrderDocument>({

    userID: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    cartID: {
        type: Schema.Types.ObjectId,
        ref: 'Cart',
        required: true
    },
    totalAmount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
        default: 'pending'
    },
    payment: {
        paymentMethod: {
            type: String,
            required: true
        },
        paymentStatus: {
            type: Boolean,
            required: true
        }
    },
    shippingAddress: {
        type: String,
        required: true
    }
});

const OrderModel: Model<IOrderDocument> = models.Order || model<IOrderDocument>('Order', OrderSchema);

export default OrderModel