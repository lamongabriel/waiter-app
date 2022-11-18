import express from 'express'
import dotenv from 'dotenv'
import path from 'node:path'

import { connectToMongo } from './database/mongo'

import appRoutes from './routes'

dotenv.config()

const server = async () => {
	await connectToMongo()

	const app = express()

	// static folder
	app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

	// middlewares
	app.use(express.json())

	// routes
	app.use(appRoutes)

	app.listen(process.env.PORT, () => {
		console.log(`🚀 Server is running on http://localhost:${ process.env.PORT }`)
	})
}

server()
