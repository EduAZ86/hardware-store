
export class UserToRegister {
    username: string;
    email: string;
    password: string;
    role: "admin" | "user";
    picture?: string;
    favoriteProducts: string[]
    constructor(username: string, email: string, password: string, role?: "admin" | "user", picture?: string) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role ? role : "user";
        this.picture = picture;
        this.favoriteProducts = [];
    }
}