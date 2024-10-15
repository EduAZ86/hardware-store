import UserModel from "@/models/user";
import { ErrorLog } from "../error/errorLog.class";
import { IUser } from "@/types/user.types";

export const getUser = async (userID: string) => {
    const user = await UserModel.findById(userID).lean();
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

export const getAllUsers = async () => {
    const users = await UserModel.find().lean();
    if (!users) {
        throw new ErrorLog("Users not found", 'error', 'getAllUsers', undefined, '/login');
    }
    const response = users.map((user) => ({
        _id: user._id.toString(),
        username: user.username,
        email: user.email,
        picture: user.picture,
        role: user.role,
        favoriteProducts: user.favoriteProducts,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
    }));
    return response;
}

export const deleteUser = async (userID: string) => {
    const users = await UserModel.findByIdAndDelete(userID);
    if (!users) {
        throw new ErrorLog("User not found", 'error', 'deleteUser', undefined, '/login');
    }
    const response = await getAllUsers();
    return response;
}

export const updateUser = async (updatedUser: Partial<IUser>, userID: string) => {
    const user = await UserModel.findByIdAndUpdate(userID, updatedUser);
    if (!user) {
        throw new ErrorLog("User not found", 'error', 'updateUser', undefined, '/login');
    }
    const response = await getUser(userID);
    return response;
}