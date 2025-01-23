import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const dbConnection = async () => {
    const MongoDB_URI = process.env.MONGO_DB_URI
    try {
        const response = await mongoose.connect(MongoDB_URI)
        console.log("db connected")
        return response
    } catch (e) {
        console.log(e)
    }
}

export default dbConnection