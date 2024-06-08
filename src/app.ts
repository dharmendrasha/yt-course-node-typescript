import Express from 'express'
import { route } from './routes'

const app = Express()
app.use(Express.json())

app.use('/api/v1', route)

export { app }