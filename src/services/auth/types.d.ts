export type credentials = {
    email: string
    password: string
}

export type registerUserParams = {
    userName: string
    email: string
    password: string
    role?: "admin" | "user"
    picture?: string,
    favoriteProducts?: string[]
}

