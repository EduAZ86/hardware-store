export class ErrorLog extends Error {
    context?: string;
    level: 'info' | 'warning' | 'error';
    user?: string;
    route?: string;

    constructor(message: string, level: 'info' | 'warning' | 'error' = 'error', context?: string, user?: string, route?: string) {
        super(message);
        this.name = this.constructor.name;
        this.level = level;
        this.context = context;
        this.user = user;
        this.route = route;
        Error.captureStackTrace(this, this.constructor);
    }
}
