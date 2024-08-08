import mongoose from "mongoose";
import { z } from "zod";

const CartItemSchema = z.object({
    productID: z.string().refine((val) => mongoose.Types.ObjectId.isValid(val), {
        message: "Invalid productID format",
    }),
    quantity: z.number().min(1),
    subTotalPrice: z.number().min(0)
})

export const CartSchema = z.object({
    userID: z.string().refine((val) => mongoose.Types.ObjectId.isValid(val), {
        message: "Invalid userID format",
    }),
    items: z.array(CartItemSchema),
    totalPrice: z.number().min(0),
    totalQuantity: z.number().min(0),
    status: z.enum(['active', 'completed', 'cancelled'])
})


const CartPartialItemSchema = z.object({
    productID: z.string().refine((val) => mongoose.Types.ObjectId.isValid(val), {
        message: "Invalid productID format",
    }).optional(),
    quantity: z.number().positive().optional(),
    subTotalPrice: z.number().nonnegative().optional(),
});

export const CartPartialSchema = z.object({
    userID: z.string().refine((val) => mongoose.Types.ObjectId.isValid(val), {
        message: "Invalid userID format",
    }).optional(),
    items: z.array(CartPartialItemSchema).min(1, "Cart must have at least one item").optional(),
    totalPrice: z.number().nonnegative().optional(),
    totalQuantity: z.number().positive().optional(),
    status: z.enum(['active', 'completed', 'cancelled']).optional(),
});


