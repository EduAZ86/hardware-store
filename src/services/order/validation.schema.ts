import mongoose from "mongoose";
import { z } from "zod";

export const OrderSchema = z.object({
    userID: z.string().refine((val) => mongoose.Types.ObjectId.isValid(val), {
        message: "Invalid userID format",
    }),
    cartID: z.string().refine((val) => mongoose.Types.ObjectId.isValid(val), {
        message: "Invalid cartID format",
    }),
    totalAmount: z.number().min(0),
    status: z.enum(['pending', 'processing', 'shipped', 'delivered', 'cancelled']),
    payment: z.object({
        paymentMethod: z.string(),
        paymentStatus: z.boolean()
    }),
    shippingAddress: z.string()
})


export const OrderPartialSchema = z.object({
    userID: z.string().refine((val) => mongoose.Types.ObjectId.isValid(val), {
        message: "Invalid userID format",
    }).optional(),
    cartID: z.string().refine((val) => mongoose.Types.ObjectId.isValid(val), {
        message: "Invalid cartID format",
    }).optional(),
    totalAmount: z.number().min(0).optional(),
    status: z.enum(['pending', 'processing', 'shipped', 'delivered', 'cancelled']).optional(),
    payment: z.object({
        paymentMethod: z.string().optional(),
        paymentStatus: z.boolean().optional()
    }).optional(),
    shippingAddress: z.string().optional()
})