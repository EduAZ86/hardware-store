import { z } from 'zod';

const paymentMethodEnum = z.enum(['pending', 'transfer', 'paypal', 'stripe', 'mercadopago', 'rapipago', 'pagofacil']);
const orderStatusEnum = z.enum(['pending', 'processing', 'shipped', 'delivered', 'cancelled']);

const paymentSchema = z.object({
  paymentMethod: paymentMethodEnum,
  paymentStatus: z.boolean(),
});

export const validationFormOrderSchema = z.object({ 
  userName: z.string().min(1, { message: 'User name is required' }),
  phoneNumber: z.string().min(1, { message: 'Phone number is required' }),
  email: z.string().email({ message: 'Invalid email format' }),  
  address: z.string().min(1, { message: 'Address is required' }),
  city: z.string().min(1, { message: 'City is required' }),
  country: z.string().min(1, { message: 'Country is required' }),
  postalCode: z.string().min(1, { message: 'Postal code is required' }),
  orderNotes: z.string().optional(), 
  status: orderStatusEnum.optional(),
  payment: paymentSchema.optional(),
});