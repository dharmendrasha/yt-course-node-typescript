import { Request, Response } from "express";
import { z } from "zod";
import { zParams } from "./dto";
import { TaskSchema } from "../../schema/task.schema";
import { wrapperController } from "../../util/wrapper";
import { HttpError } from "../../util/exception";

export const Delete = wrapperController(async (req: Request<z.infer<typeof zParams>>, res: Response) => {
        const params = zParams.parse(req.params)
        const deleted = await TaskSchema.deleteOne({_id: params.id})
        if(deleted.deletedCount === 0){
            throw new HttpError("Task not found", 404)
        }
        res.json({message: 'Task deleted completely', body: null})
})