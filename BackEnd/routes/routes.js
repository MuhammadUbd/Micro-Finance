import express from "express"
import { authRouter } from "./authRoutes.js"
import { blogRouter } from "./blogRoutes.js"

export const router = express.Router()

router.use('/auth', authRouter)

router.use('/dashboard/blogs', blogRouter)