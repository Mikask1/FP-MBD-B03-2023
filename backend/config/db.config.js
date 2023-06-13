import dotenv from 'dotenv'

dotenv.config()

const DB_CONFIG = {
	user: process.env.USER,
	host: process.env.HOST,
	database: process.env.DATABASE,
	password: process.env.PASSWORD,
	port: process.env.PORT,
}

export default DB_CONFIG