import { Schema, model } from 'mongoose';

export const tableName = 'task'

export enum TaskPriority{
    HIGH = 'HIGH',
    LOW = 'LOW',
    MEDIUM = 'MEDIUM'
}

const schema = new Schema({
    description: {type: String, required: true},
    priority: {type: String, required: false, enum: TaskPriority, default: TaskPriority.LOW},
    untill: {type: Date, required: true},
})

export const TaskSchema = model(tableName, schema)