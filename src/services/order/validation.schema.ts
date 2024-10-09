import { z } from "zod";

const shippingDataSchema = z.object({
    address: z.string(),
    city: z.string(),
    country: z.string(),
    postalCode: z.string()
});

const paymentSchema = z.object({
    paymentMethod: z.enum(['transfer', 'paypal', 'stripe', 'mercadopago', 'rapipago', 'pagofacil']),
    paymentStatus: z.boolean()
});

const cartItemSchema = z.object({
    productID: z.string(),
    quantity: z.number().min(1) 
});

export const OrderSchema = z.object({
    userID: z.string(),
    userName: z.string().min(1, "User name is required"),
    phoneNumber: z.string().min(1, "Phone number is required"),
    email: z.string().email("Invalid email format"),
    items: z.array(cartItemSchema).nonempty("Order must contain at least one item"),
    totalAmount: z.number().min(0),
    shippingData: shippingDataSchema,
    orderNotes: z.string().optional(),
    status: z.enum(['pending', 'processing', 'shipped', 'delivered', 'cancelled']),
    payment: paymentSchema.optional()
});


export const OrderPartialSchema = z.object({
    userID: z.string().optional(),
    userName: z.string().min(1, "User name is required").optional(),
    phoneNumber: z.string().min(1, "Phone number is required").optional(),
    email: z.string().email("Invalid email format").optional(),
    items: z.array(cartItemSchema).optional(),
    totalAmount: z.number().min(0).optional(),
    shippingData: shippingDataSchema.optional(),
    orderNotes: z.string().optional(),
    status: z.enum(['pending', 'processing', 'shipped', 'delivered', 'cancelled']).optional(),
    payment: paymentSchema.optional()
});
