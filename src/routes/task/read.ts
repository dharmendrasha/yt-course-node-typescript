import { Request, Response } from "express";
import { wrapperController } from "../../util/wrapper";
import { z } from "zod";
import { zParams } from "./dto";
import { TaskSchema } from "../../schema/task.schema";
import { HttpError } from "../../util/exception";


export const Read = wrapperController(async (req: Request<z.infer<typeof zParams>>, res: Response) => {
    const params = zParams.parse(req.params)
    const task = await TaskSchema.findById(params.id)

    if(!task){
        throw new HttpError("Task not found", 404)
    }

    res.json({message: "task found", data: task})
})


/**
 * With Pagination
 * @param req 
 * @param res 
 */
export async function ReadAll(req: Request, res: Response){
    
}