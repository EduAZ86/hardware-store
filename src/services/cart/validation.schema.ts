import mongoose from "mongoose";
import { z } from "zod";

const CartItemSchema = z.object({
    productID: z.string().refine((val) => mongoose.Types.ObjectId.isValid(val), {
        message: "Invalid productID format",
    }),
    quantity: z.number().min(1),
    subTotalPrice: z.number().min(0)
})

const CartSchema = z.object({
    userID: z.string().refine((val) => mongoose.Types.ObjectId.isValid(val), {
        message: "Invalid userID format",
    }),
    items: z.array(CartItemSchema),
    totalPrice: z.number().min(0),
    totalQuantity: z.number().min(0),
    status: z.enum(['active', 'completed', 'cancelled'])
})

export default CartSchema