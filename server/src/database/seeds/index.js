import { Seeder } from 'mongo-seeding'
import dotenv from 'dotenv'

dotenv.config()

const config = {
	database: process.env.MONGO_DB_URL,
	dropDatabase: true
}

const seeder = new Seeder(config)

const collections = seeder.readCollectionsFromPath('./data')

async function importData () {
	try {
		await seeder.import(collections)
		console.log('📦 Data succesfully seeded to the DB!')
	} catch (error) {
		console.log(error)
	}
}

importData()
