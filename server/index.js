import express from "express"
import bodyParser from "body-parser"
import mongoose, { mongo } from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import postRoute from "./routes/posts.js"
const app = express()


app.use(cors())
app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({limit: '50mb',extended: true}))

app.use('/posts', postRoute)

const MONGO_URL = "mongodb+srv://moments:moments@cluster0.ewufqkr.mongodb.net/?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;
mongoose.connect(MONGO_URL)
    .then(() => app.listen(PORT, () => { console.log(`sever is running on port:${PORT}`) }))
    .catch((err) => console.log(err))