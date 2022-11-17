import express from 'express'
import dotenv from 'dotenv'
import { connectToMongo } from './database/mongo'

dotenv.config()

const server = async () => {
	await connectToMongo()

	const app = express()

	app.listen(process.env.PORT, () => {
		console.log(`🚀 Server is running on http://localhost:${ process.env.PORT }`)
	})
}

server()
