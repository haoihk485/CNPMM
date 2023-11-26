import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import bodyParser from 'body-parser'

import connectDB from './database/db.js'
import router from './routes/route.js'

const app = express()

app.use(cors())
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', router)

app.listen(process.env.PORT, () => console.log(`Server is running on ${process.env.PORT}`))

const USERNAME = process.env.DB_USERNAME
const PASSWORD = process.env.DB_PASSWORD

connectDB(USERNAME, PASSWORD)