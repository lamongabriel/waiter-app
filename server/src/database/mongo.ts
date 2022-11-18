import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const url = process.env.MONGO_DB_URL

export async function connectToMongo () {
	if(url) {
		await mongoose.connect(url)
		return console.log('⚡ Connected to mongo!')
	}
	else {
		throw new Error('😫 Missing .env configuration')
	}
}
