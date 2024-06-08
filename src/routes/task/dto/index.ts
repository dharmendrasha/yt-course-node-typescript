import { TaskPriority } from '../../../schema/task.schema'
import { z } from 'zod'

export const zTask = z.object({
    description: z.string().min(5),
    priority: z.enum([TaskPriority.HIGH, TaskPriority.LOW, TaskPriority.MEDIUM]).default(TaskPriority.LOW).optional(),
    untill: z.string().datetime().transform((v) => new Date(v))
})