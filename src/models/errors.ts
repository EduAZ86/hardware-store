import { IErrorLog } from "@/services/error/types";
import { Document, Model, Schema, model, models } from "mongoose";

interface IErrorLogDocument extends IErrorLog, Document { }

const ErrorLogSchema: Schema<IErrorLogDocument> = new Schema<IErrorLogDocument>({
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

const ErrorLogModel: Model<IErrorLogDocument> = models?.ErrorLog || model<IErrorLogDocument>('ErrorLog', ErrorLogSchema);

export default ErrorLogModel;