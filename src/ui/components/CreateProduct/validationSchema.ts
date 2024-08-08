import { ECategory } from '@/types/product.types.d';
import { z } from 'zod';


// Esquema para TPrice
const priceSchema = z.object({
    price: z.number(),
    percentageDiscount: z.number(),
    descriptionDiscount: z.string().optional()
});

// Esquema para TDimensions
const dimensionsSchema = z.object({
    length: z.number().optional(),
    width: z.number().optional(),
    height: z.number().optional(),
    weight: z.number().optional()
});

const imageLoaderSchema = z.object({
    "image-1": z.string().min(1, { message: "url image 1 is required" }).url(),
    "image-2": z.string().min(1, { message: "url image 2 is required" }).url(),
    "image-3": z.string().min(1, { message: "url image 3 is required" }).url(),
    "image-4": z.string().min(1, { message: "url image 4 is required" }).url(),
    "image-5": z.string().min(1, { message: "url image 5 is required" }).url()
})

// Esquema para IProduct
export const validationSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    description: z.string().min(1, { message: "Description is required" }),
    category: z.nativeEnum(ECategory),
    brand: z.string().min(1, { message: "Brand is required" }),
    modelProduct: z.string().min(1, { message: "Model is required" }),
    sku: z.string().min(1, { message: "Sku is required" }),
    price: priceSchema,
    releaseDate: z.date({ message: "Release date is required" }),
    images: imageLoaderSchema,
    averageRating: z.number().min(0).max(5).optional(),
    dimensions: dimensionsSchema.optional(),
    warranty: z.string().optional(),
    manufacturer: z.string().min(1, { message: "Manufacturer is required" }),
    stock: z.number().int().min(1, { message: "Stock is required" }),
});
