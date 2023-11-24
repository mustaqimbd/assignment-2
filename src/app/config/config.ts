import dotenv from "dotenv"
dotenv.config()

const port = process.env.PORT
const databaseUrl = process.env.DATABASE_URL

export { port, databaseUrl }
