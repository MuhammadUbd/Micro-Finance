import { User } from "../model/authModel.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import crypto from "crypto"
import { enums } from "../enums/enum.js"
import { sendResetEmail, sendSuccessEmail } from "../nodeMailer/sendEmail.js"
dotenv.config()

const registerController = async (req, res) => {
    try {
        const { username, email, password, role } = req.body
        if (!username || !email || !password || !role) {
            return res.status(400).json({ message: enums.ALL_FIELDS_REQ })
        }
        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ message: enums.EMAIL_EXIST })
        }
        const hashPassword = await bcrypt.hash(password, 10)
        const newUser = await User.create({
            username,
            email,
            password: hashPassword,
            role,
        })
        res.status(201).json({ message: enums.USER_CREATED, newUser })
    } catch (e) {
        return res.status(400).json({ message: e.message })
    }
}

const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const jwtMessage = process.env.JWT_TOKEN;

        if (!email || !password) {
            return res.status(400).json({ message: enums.ALL_FIELDS_REQ });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: enums.USER_NOT_FOUND });
        }

        const validatePassword = await bcrypt.compare(password, user.password);
        if (!validatePassword) {
            return res.status(400).json({ message: enums.INVALID_CREDENTIALS });
        }

        const token = jwt.sign({ id: user._id }, jwtMessage);
        return res.status(200).json({ message: enums.USER_LOGGED_IN, token, user });
    } catch (error) {
        return res.status(400).json({ message: e.message })
        // return res.status(500).json({ message: "Internal server error" });
    }
}

const logoutController = async (req, res) => {
    try {
        return res.status(200).json({ message: enums.USER_LOGGED_OUT })
    } catch (e) {
        return res.status(400).json({ message: e.message })
    }
}

const forgotPasswordController = async (req, res) => {
    // const token = tokenGenerator()
    const { email } = req.body;
    try {
        // this is your mistake await ni tha to usy user ni mila jb user
        // ni mila to email ni mili
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: enums.USER_NOT_FOUND })
        }
        // console.log(user)
        // // else ni lgta 
        const resetToken = crypto.randomBytes(20).toString("hex");
        const resetTokenExpires = Date.now() + 1 * 60 * 60 * 100;

        user.resetPasswordToken = resetToken;
        user.resetPasswordExpires = resetTokenExpires;
        await user.save()
        await sendResetEmail(email, `http://localhost:5173/reset-password/${resetToken}`)

        res.status(200).json({ message: enums.EMAIL_SENT })
    } catch (e) {
        res.status(400).send({ message: e.message })
    }
}

const resetPasswordController = async (req, res) => {
    const { password } = req.body;
    const { token } = req.params;
    try {
        const user = await User.findOne({ resetPasswordToken: token })
        console.log(user);
        if (!user) {
            return res.status(400).json({ message: enums.INVALID_TOKEN })

        }
        const hashPassword = await bcrypt.hash(password, 10);
        user.password = hashPassword;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpiresAt = undefined;
        await user.save();
        await sendSuccessEmail(user?.email);
        res.status(200).send({ message: enums.PASSWORD_CHANGED })
    }
    catch (e) {
        res.status(400).send({ message: e.message })
    }

}

export { registerController, loginController, logoutController, resetPasswordController, forgotPasswordController }