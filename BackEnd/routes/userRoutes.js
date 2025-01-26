import express from "express"
import { getAllUsers, getSingleUserData, getUserData } from "../controllers/userController.js"


export const userRouter = express.Router()

userRouter.get('/users', getAllUsers)

userRouter.get('/users/data', getUserData)

// userRouter.get('/user/', getSingleUserData)