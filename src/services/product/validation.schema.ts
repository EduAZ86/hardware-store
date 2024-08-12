
import { ECategory } from '@/types/product.types.d';
import { z } from 'zod';

const priceSchema = z.object({
    price: z.number(),
    percentageDiscount: z.number(),
    descriptionDiscount: z.string().optional()
});

const priceSchemaOptional = z.object({
    price: z.number().optional(),
    percentageDiscount: z.number().optional(),
    descriptionDiscount: z.string().optional()
});

const dimensionsSchema = z.object({
    length: z.number().optional(),
    width: z.number().optional(),
    height: z.number().optional(),
    weight: z.number().optional()
});

export const ProductSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    description: z.string().min(1, { message: "Description is required" }),
    category: z.nativeEnum(ECategory),
    brand: z.string().min(1, { message: "Brand is required" }),
    modelProduct: z.string().min(1, { message: "Model is required" }),
    sku: z.string().min(1, { message: "Sku is required" }),
    price: priceSchema,
    releaseDate: z.date(),
    images: z.array(z.string().url()).min(1, { message: "Images are required" }),
    averageRating: z.number().min(0).max(5).optional(),
    dimensions: dimensionsSchema.optional(),
    warranty: z.string().optional(),
    manufacturer: z.string(),
    stock: z.number().int().min(1, { message: "Stock is required" }),
});

export const ProductPartialSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }).optional(),
    description: z.string().min(1, { message: "Description is required" }).optional(),
    category: z.nativeEnum(ECategory).optional(),
    brand: z.string().min(1, { message: "Brand is required" }).optional(),
    modelProduct: z.string().min(1, { message: "Model is required" }).optional(),
    sku: z.string().min(1, { message: "Sku is required" }).optional(),
    price: priceSchemaOptional,
    releaseDate: z.date().optional(),
    images: z.array(z.string().url()).min(1, { message: "Images are required" }).optional(),
    averageRating: z.number().min(0).max(5).optional(),
    dimensions: dimensionsSchema.optional(),
    warranty: z.string().optional(),
    manufacturer: z.string().optional(),
    stock: z.number().int().min(1, { message: "Stock is required" }).optional(),
});


