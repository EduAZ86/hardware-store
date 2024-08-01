import { Date, Document } from 'mongoose';
import { User } from 'next-auth';

type Role = "admin" | "user"

export interface INewUser {
    username: string;
    email: string;
    password: string;
    role: Role;
    picture?: string;
}

export interface IUser {
    username: string;
    email: string;
    password: string;
    picture?: string;
    role: 'admin' | 'user';
    favoriteProducts: string[];
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IUserDataBaseResponse extends Omit<IUser,"password"> {
    id: string;    
}

export interface IUserSession extends User {
    _doc: IUserDataBaseResponse
}