import UserModel from "@/models/user";
import { credentials } from "./types";
import bcCrypt from "bcryptjs"
import { INewUser } from "@/types/user.types";
import { loginSchema, registerSchema } from "./validation.schema";
import { ErrorLog } from "../error/errorLog.class";
import { UserToRegister } from "./userToRegister.class";


export const checkUser = async (email: string) => {
    const user = await UserModel.findOne({ email })
    if (!user) {
        return false
    } else {
        return true
    }
}

export const getUser = async (email: string) => {
    const user = await UserModel.findOne({ email }).lean()
    if (!user) {
        throw new ErrorLog("User not found", 'error', 'getUser', undefined, '/login');
    }
    return {
        _id: user._id.toString(),
        username: user.username,
        email: user.email,
        picture: user.picture,
        role: user.role,
        favoriteProducts: user.favoriteProducts,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
    };
}
export const loginUser = async (credentials: credentials) => {
    //validation
    const parsedCredentials = loginSchema.parse(credentials);

    const user = await UserModel.findOne({ email: parsedCredentials.email }).lean()
    if (!user) {
        throw new ErrorLog("User not found", 'error', 'loginUser', undefined, '/login');
    }
    const isMatch = await bcCrypt.compare(parsedCredentials.password, user.password);
    if (!isMatch) {
        throw new ErrorLog("Invalid password", 'error', 'loginUser', undefined, '/login');
    }
    return {
        _id: user._id.toString(),
        username: user.username,
        email: user.email,
        picture: user.picture,
        role: user.role,
        favoriteProducts: user.favoriteProducts,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
    };

};
export const registerUser = async (newUser: INewUser) => {
    //validation
    const parsedUser = registerSchema.parse(newUser);
    const userExists = await checkUser(parsedUser.email);
    if (userExists) {
        throw new ErrorLog("User already exists", 'error', 'registerUser', undefined, '/register');
    }
    const cryptPassword = await bcCrypt.hash(parsedUser.password, 10);
    const newUserToRegister = new UserToRegister(
        parsedUser.username,
        parsedUser.email,
        cryptPassword,
        parsedUser.role,
        parsedUser.picture
    )
    const newUserToSave = new UserModel(newUserToRegister);
    const savedUser = await newUserToSave.save();
    return savedUser
};

