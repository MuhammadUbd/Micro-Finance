import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import dbConnection from "./db/dbConnection.js"
import { router } from "./routes/routes.js"
import bodyParser from "body-parser"

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

const app = express() 
dotenv.config()

const PORT = process.env.PORT || 8080
app.use(cors({
    origin: 'http://localhost:5173',  // Your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],  // Allow Authorization header
}));
app.use(express.json())

app.get('/', (req,res) => {
    res.status(200).send({message: "Api is running"})
})

app.use('/api', router)

dbConnection()

app.listen(PORT, () => {
    console.log("server running")
})
