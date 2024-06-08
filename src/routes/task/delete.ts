import { Request, Response } from "express";
import { TaskSchema } from "schema/task.schema";


export async function Delete(req: Request<{id?: string}>, res: Response){

    if(req.params.id){
        return res.json({message: 'not found'}).status(404)
    }


    TaskSchema.deleteOne({id: req.params.id})
}