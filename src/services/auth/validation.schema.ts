import { z } from "zod";

const defaultUserImage = 'https://cdn-icons-png.flaticon.com/512/149/149071.png'

const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;



export const loginSchema = z.object({
    email: z.string().email({ message: "Invalid email format" }),
    password: z.string().min(1, { message: "Password is required" })
});

export const registerSchema = z.object({
    username: z.string()
        .min(3, { message: "Username must be at least 3 characters" })
        .max(25, { message: "Username must be less than 25 characters" }),
    email: z.string()
        .email({ message: "Invalid email format" })
        .min(5, { message: "Email must be at least 5 characters" })
        .max(30, { message: "Email must be less than 30 characters" }),
    password: z.string()
        .min(6, { message: "Password must be at least 6 characters" })
        .max(20, { message: "Password must be less than 20 characters" }),
    role: z.enum(["admin", "user"]).optional().default("user"),
    picture: z.string().optional().refine((url) => {
        if (!url) return true;
        return urlRegex.test(url)
    }, {
        message: "Invalid image URL or format"
    })
});
