import { z } from 'zod';
import mongoose from 'mongoose';

const CartItemSchema = z.object({
    productID: z.string().refine((val) => mongoose.Types.ObjectId.isValid(val), {
        message: "Invalid productID format",
    }).optional(),
    quantity: z.number().positive().optional(),
    subTotalPrice: z.number().nonnegative().optional(),
});

const CartPartialSchema = z.object({
    userID: z.string().refine((val) => mongoose.Types.ObjectId.isValid(val), {
        message: "Invalid userID format",
    }).optional(),
    items: z.array(CartItemSchema).min(1, "Cart must have at least one item").optional(),
    totalPrice: z.number().nonnegative().optional(),
    totalQuantity: z.number().positive().optional(),
    status: z.enum(['active', 'completed', 'cancelled']).optional(),
});

export default CartPartialSchema;
