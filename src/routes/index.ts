import { Router } from "express";
import { router as RouterTask } from "./task";

const route = Router()
route.use('/task', RouterTask)

export { route }