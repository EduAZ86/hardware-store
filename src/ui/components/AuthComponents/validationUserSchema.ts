import { z } from "zod";

export const validationUserSchema = z.object({
    email: z
        .string()
        .min(1, "Email is required")
        .email("Email is invalid")
        .toLowerCase()
    ,
    password: z
        .string()
        .min(1, "Password is required")
        .min(8, "Password must be more than 8 characters")
        .max(32, "Password must be less than 32 characters")
        .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character")
    ,
    user: z
        .string()
        .min(1, "User name is required")
        .min(3, "User name must be at least 3 characters")
        .max(15, "User name must be less than 15 characters")
})