import express from 'express'
import dotenv from 'dotenv'
import path from 'node:path'
import cors from 'cors'
import http from 'node:http'
import { Server } from 'socket.io'

import { connectToMongo } from './database/mongo'

import appRoutes from './routes'

dotenv.config()

const app = express()
const server = http.createServer(app)
export const io = new Server(server)

const bootstrap = async () => {
	await connectToMongo()

	// static folder
	app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

	app.use(cors())

	// middlewares
	app.use(express.json())

	// routes
	app.use(appRoutes)

	server.listen(process.env.PORT, () => {
		console.log(`🚀 Server is running on http://localhost:${ process.env.PORT }`)
	})
}

bootstrap()
