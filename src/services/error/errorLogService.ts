import ErrorLogModel from "@/models/errors";
import { ErrorLog } from "./errorLog.class";

export const errorLogSave = async (error: any) => {
    let errorLogInstance;

    // Verifica si el error es una instancia de ErrorLog
    if (error instanceof ErrorLog) {
        errorLogInstance = error;
    } else {
        // Si no, crea una nueva instancia de ErrorLog con información básica
        errorLogInstance = new ErrorLog(
            error.message,
            'error',
            'Unknown context',
            undefined, 
            'Unknown route'
        );
    }
    const errorLogDocument = new ErrorLogModel({
        message: errorLogInstance.message,
        stack: errorLogInstance.stack || '',
        context: errorLogInstance.context,
        level: errorLogInstance.level,
        user: errorLogInstance.user,
        route: errorLogInstance.route
    });
    await errorLogDocument.save();
    return { success: true };
};
