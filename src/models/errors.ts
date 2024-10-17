import { IErrorLog } from "@/services/error/types";
import { Document, Model, Schema, model, models } from "mongoose";

interface IErrorLogDocument extends IErrorLog, Document { }

const ErrorLogSchema: Schema<IErrorLogDocument> = new Schema<IErrorLogDocument>({
    message: {
        type: String,
  
    },
    stack: {
        type: String,
    
    },
    context: {
        type: String
    },
    timestamp: {
        type: Date,
        default: Date.now,
       
    },
    level: {
        type: String,
        enum: ['info', 'warning', 'error'],
        default: 'error',
       
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