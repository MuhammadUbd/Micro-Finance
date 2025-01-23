import express from "express"
import { addBlog, deleteBlog, getBlog, updateBlog } from "../controllers/blogControllers.js"
import { upload } from "../cloudinary/cloundinary.js"

export const blogRouter = express.Router()

blogRouter.get('/', getBlog)

blogRouter.post('/add', upload.single("thumbnail"), addBlog)

blogRouter.put('/update/:id', updateBlog)

blogRouter.delete('/delete/:id', deleteBlog)