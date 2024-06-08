import dotEnv from 'dotenv'
import { resolve } from 'node:path'

dotEnv.config({path: resolve(__dirname, '../.env')})

const { env } = process

export const PORT: Number = Number(env['PORT'] || 3000)
export const MONGO_DB_CONN_STRING = env['MONGO_DB_CONN_STRING']