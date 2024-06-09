import { Request, Response } from "express";
import { z } from "zod";
import { zTask } from "./dto";
import { TaskSchema } from "../../schema/task.schema";
import { wrapperController } from "../../util/wrapper";


export const Create = wrapperController(async (req: Request<z.infer<typeof zTask>>, res: Response) => {
        const body = zTask.parse(req.body)
        const task = new TaskSchema(body)
        await task.save()
        res.json({message: 'task saved completely', body: task}).status(201)
})