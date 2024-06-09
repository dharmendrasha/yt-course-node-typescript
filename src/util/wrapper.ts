import { Request, Response } from "express";
import { z, ZodError } from "zod";
import { logger } from "./logger";
import { HttpError } from "./exception";

export const wrapperController = (fn: (req: Request<z.infer<any>>, res: Response) => Promise<void>) => {
    return async (req: Request, resp: Response) => {
        try{

            await fn(req, resp)

        }catch(e){

            if(e instanceof ZodError){            
                return resp.json({message: "Unexpected input type", isError: true, body: {}, error: e.errors}).status(422)
            }

            if(e instanceof HttpError){
                return resp.json({message: e.message, isError: true, body: {}, error: e.error}).status(e.status)
            }

            logger.error(e)

            return resp.json({message: "unexpected error", isError: true, body: {}, error: null}).status(422)

        }
    }
}