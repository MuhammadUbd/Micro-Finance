import express from "express"
import { authRouter } from "./authRoutes.js"
import { blogRouter } from "./blogRoutes.js"
import { authMiddleware } from "../middleware/authmiddle.js"
import { userRouter } from "./userRoutes.js"
// import adminRouter from "./adminRoutes.js"

export const router = express.Router()

router.use('/auth', authRouter)

router.use('/user-dashboard/blogs',authMiddleware, blogRouter)

router.use('/admin-dashboard',authMiddleware,userRouter )
 
// router.use('/admin-dashboard',authMiddleware, adminRouter)