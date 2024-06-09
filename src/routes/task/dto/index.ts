import { Types } from 'mongoose'
import { TaskPriority } from '../../../schema/task.schema'
import { z } from 'zod'

const id = z.string().refine((val) => Types.ObjectId.isValid(val)).transform(v => new Types.ObjectId(v))

export const zTask = z.object({
    description: z.string().min(5),
    priority: z.enum([TaskPriority.HIGH, TaskPriority.LOW, TaskPriority.MEDIUM]).default(TaskPriority.LOW).optional(),
    untill: z.string().datetime().transform((v) => new Date(v)),
})

export const zParams = z.object({
    id,
})


export const zTaskUpdate = zTask.merge(zParams)