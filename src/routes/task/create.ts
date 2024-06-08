import { Request, Response } from "express";
import { z, ZodError } from "zod";
import { zTask } from "./dto";
import { TaskSchema } from "../../schema/task.schema";
import { logger } from "../../util/logger";


export async function Create(req: Request<z.infer<typeof zTask>>, res: Response){
    try{

        const body = zTask.parse(req.body)
        const task = new TaskSchema(body)
        await task.save()

        
        return res.json({message: 'task saved completely', body: task})


    }catch(e){
        
        if(e instanceof ZodError){            
            return res.json({message: 'task could not be saved.', isError: true, body: {}, error: e.errors}).status(422)
        }

        logger.error(e)
    
    }
}