import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from "multer-storage-cloudinary"
import env from "dotenv"
import multer from 'multer';
env.config()

const cloudName = process.env.CLOUD_NAME;
const apiKey = process.env.API_KEY;
const apiSecurity = process.env.API_SECRET;

cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecurity,
})

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "uploads",
        allowedFormats: ['jpeg', 'png', 'jpg'],
    }
})

export const upload = multer({ storage })



