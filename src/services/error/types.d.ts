import mongoose, { Schema, Document } from 'mongoose';
interface IErrorLog extends Document {
    message: string;
    stack: string;
    context?: string;
    timestamp: Date;
    level: 'info' | 'warning' | 'error'; // Nivel de severidad del error
    user?: string; // ID del usuario relacionado con el error, si aplica
    route?: string; // Ruta de la aplicación donde ocurrió el error
}