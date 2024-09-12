import { IUser } from "@/types/user.types";
import { Model, Schema, model, models } from "mongoose";

interface IUserDocument extends IUser, Document { }

const UserSchema: Schema<IUserDocument> = new Schema<IUserDocument>({
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        match: [/.+@.+\..+/, "Invalid email address!"],
    },
    username: {
        type: String,
        required: [true, "User name is required"],
        maxlength: 25,
        minlength: 3
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    picture: {
        type: String,
        default: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
        required: true
    },
    favoriteProducts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product',
        },
    ],
    cartProducts: [
        {
            productID: {
                type: Schema.Types.ObjectId,
                ref: 'Product',
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
                min: 1,
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
});

UserSchema.path('favoriteProducts').default([]);
UserSchema.path('cartProducts').default([]);

const UserModel: Model<IUserDocument> = models.User || model<IUserDocument>('User', UserSchema);

export default UserModel;
