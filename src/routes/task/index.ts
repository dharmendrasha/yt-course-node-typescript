import { Router } from "express";
import { Read, ReadAll } from "./read";
import { Create } from "./create";
import { Update } from "./update";
import { Delete } from "./delete";
const router = Router()

// read
router.get('/', ReadAll)
router.get(':id', Read)

//create
router.post('/', Create)

//update
router.put('/', Update)


//delete
router.delete('/', Delete)


export { router }