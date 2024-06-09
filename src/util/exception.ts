export class HttpError extends Error{
    constructor(
        public m: string, 
        public status: number,
        public error?: Record<string, any>
    ){
        super(m)
    }
}   