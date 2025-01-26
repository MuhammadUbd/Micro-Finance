import express from "express"
import { forgotPasswordController, loginController, logoutController, registerController, resetPasswordController } from "../controllers/authControllers.js";

export const authRouter = express.Router();

authRouter.post('/register', registerController)

authRouter.post('/login', loginController)

authRouter.post('/logout', logoutController)

authRouter.post('/reset-password/:token', resetPasswordController)

authRouter.post('/forgot-password', forgotPasswordController)

