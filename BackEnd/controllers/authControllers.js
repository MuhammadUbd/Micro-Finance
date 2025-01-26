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
        const { CNIC, email, password } = req.body
        if (!CNIC || !email || !password) {
            return res.status(400).json({ message: enums.ALL_FIELDS_REQ })
        }
        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ message: enums.EMAIL_EXIST })
        }
        const hashPassword = await bcrypt.hash(password, 10)
        const newUser = await User.create({
            // role,
            email,
            password: hashPassword,
            CNIC,
        })
        res.status(201).json({ message: enums.USER_CREATED, newUser })
    } catch (e) {
        return res.status(400).json({ message: e.message })
    }
}


const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const jwtSecret = process.env.JWT_TOKEN;

        if (!email || !password) {
            return res.status(400).json({ message: enums.ALL_FIELDS_REQ });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: enums.USER_NOT_FOUND }); // Not Found
        }

        const validatePassword = await bcrypt.compare(password, user.password);
        if (!validatePassword) {
            return res.status(401).json({ message: enums.INVALID_CREDENTIALS }); // Unauthorized
        }

        const token = jwt.sign({ id: user._id, role: user.role }, jwtSecret, { expiresIn: "24h" });

        // Avoid sending sensitive fields
        const { password: _, resetPasswordToken, resetPasswordExpires, ...userWithoutSensitiveData } = user.toObject();

        return res.status(200).json({
            message: enums.USER_LOGGED_IN,
            token,
            user: userWithoutSensitiveData,
        });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};


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
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: enums.USER_NOT_FOUND })
        }

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