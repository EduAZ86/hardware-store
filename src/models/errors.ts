import { IErrorLog } from "@/services/error/types";
import { Model, Schema, model, models } from "mongoose";

const ErrorLogSchema: Schema = new Schema({
    message: {
        type: String,
        required: true
    },
    stack: {
        type: String,
        required: true
    },
    context: {
        type: String
    },
    timestamp: {
        type: Date,
        default: Date.now,
        required: true
    },
    level: {
        type: String,
        enum: ['info', 'warning', 'error'],
        default: 'error',
        required: true
    },
    user: {
        type: String
    },
    route: {
        type: String
    }
});

const ErrorLogModel: Model<IErrorLog> = models.ErrorLog || model<IErrorLog>('ErrorLog', ErrorLogSchema);

export default ErrorLogModel;