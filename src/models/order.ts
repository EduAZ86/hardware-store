import { IOrder } from "@/types/order.types";
import { Document, model, Model, models, Schema } from "mongoose";

interface IOrderDocument extends Omit<IOrder, 'userID' | 'cartID'>, Document {
    userID: Schema.Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}

const shippingDataSchema = new Schema({
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    postalCode: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    }
})

const paymentSchema = new Schema({
    paymentMethod: {
        type: String,
        enum: ['transfer', 'paypal', 'stripe', 'mercadopago', 'rapipago', 'pagofacil'],
        required: true
    },
    paymentStatus: {
        type: Boolean,
        required: true
    }
});

const OrderSchema: Schema<IOrderDocument> = new Schema<IOrderDocument>({
    userID: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    items: {
        type: [{
            productID: {
                type: Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }],
        required: true
    },
    totalAmount: {
        type: Number,
        required: true
    },
    shippingData: {
        type: shippingDataSchema,
        required: true
    },
    orderNotes: {
        type: String,
        required: false
    },
    status: {
        type: String,
        enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
        default: 'pending'
    },
    payment: {
        type: paymentSchema,
        required: false
    }
}, {
    timestamps: true
});

const OrderModel: Model<IOrderDocument> = models.Order || model<IOrderDocument>('Order', OrderSchema);

export default OrderModel;