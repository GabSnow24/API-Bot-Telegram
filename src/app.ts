import express from 'express'
import http from 'http'
import cors from 'cors'
import { GroupRoutes } from "./routes/GroupRoutes"
import { AuthenticableRoutes } from "./routes/AuthenticableRoutes"
import robo from './robo'
import { MessagesRoutes } from './routes/MessagesRoutes'

const app = express()
app.use(cors())

const serverHttp = http.createServer(app)

app.use(express.json())

app.use(GroupRoutes)
app.use(MessagesRoutes)
app.use(AuthenticableRoutes)

//robo()

export {  serverHttp, app }