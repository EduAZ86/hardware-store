
import { ECategory } from '@/types/product.types.d';
import { z } from 'zod';

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
    name: z.string()
        .min(1, { message: "Name is required" })
        .max(100, { message: "Name must be at most 100 characters long" }),
    description: z.string()
        .min(1, { message: "Description is required" })
        .max(500, { message: "Description must be at most 500 characters long" }),
    category: z.nativeEnum(ECategory),
    brand: z.string().min(1, { message: "Brand is required" }),
    modelProduct: z.string().min(1, { message: "Model is required" }),
    sku: z.string().min(1, { message: "Sku is required" }),
    price: z.object({
        price: z.number().min(0, { message: "Price is required" }),
        percentageDiscount: z.number().optional(),
        descriptionDiscount: z.string().optional(),
    }),
    releaseDate: z.string({ message: "Release date is required" }),
    images: z.array(z.string().url()).min(1, { message: "Images are required" }),
    averageRating: z.number().min(0).max(5).optional(),
    dimensions: dimensionsSchema.optional(),
    warranty: z.string().optional(),
    manufacturer: z.string().min(1, { message: "Manufacturer is required" }),
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


