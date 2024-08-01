import mongoose, { Schema, Document } from 'mongoose';

type TLevel = 'info' | 'warning' | 'error';
interface IErrorLog extends Document {
    message: string;
    stack: string;
    context?: string;
    timestamp: Date;
    level: TLevel;
    user?: string; // ID del usuario relacionado con el error, si aplica
    route?: string; // Ruta de la aplicación donde ocurrió el error
}