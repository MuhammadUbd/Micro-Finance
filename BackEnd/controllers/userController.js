import { User } from "../model/authModel.js"
import { Loan } from "../model/blogModel.js"

export const getAllUsers = async (req, res) => {
    try {
        // console.log('type', req.user)
        if (req.user.role !== 'admin') {
            return res.status(401).json({ message: "not aouthorized" })
        }
        const users = await User.find({role : "user"})
        if (!users) {
            return res.status(400).json({ message: "User not found" })
        }
        return res.status(201).json({ message: "Users found", users })
    } catch (e) {
        return res.status(400).json({ message: e.message })
    }
}

export const getUserData = async (req, res) => {
    try {
        // console.log('type', req.user)
        if (req.user.role !== 'admin') {
            return res.status(401).json({ message: "not aouthorized" })
        }
        const users = await User.find({role : "user"})
        const data = await Loan.find({user: req.user.id})
        console.log(data)
        if (!users) {
            return res.status(400).json({ message: "User not found" })
        }
        return res.status(201).json({ message: "User data found", data })
    } catch (e) {
        console.log(e.message)
        return res.status(400).json({ message: e.message })
    }
}


