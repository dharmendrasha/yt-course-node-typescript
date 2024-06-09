import { Request, Response } from "express";
import { wrapperController } from "../../util/wrapper";
import { z } from "zod";
import { zTaskUpdate } from "./dto";
import { TaskSchema } from "../../schema/task.schema";
import { HttpError } from "../../util/exception";

export const Update = wrapperController(async (req: Request<z.infer<typeof zTaskUpdate>>, res: Response) => {
    const body = zTaskUpdate.parse(req.body)
    const task = await TaskSchema.findById(body.id)

    if(!task){
        throw new HttpError("Task not found", 404)
    }
    // update the records

    task.set(body)
    await task.save()

    // return successfull message
    res.json({message: 'Task updated successfully', data: null})
})