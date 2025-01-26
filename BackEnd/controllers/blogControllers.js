import { enums } from "../enums/enum.js";
import { Loan } from "../model/blogModel.js";

export const getBlog = async (req, res) => {
    try {
        // console.log(req.user);
        const allBlogs = await Loan.find({ user: req.user.id });
        // console.log(allBlogs)
        if (allBlogs === 0) {
            return res.status(404).json({ message: enums.BLOG_NOT_FOUND })
        }
        res.status(201).json({ message: enums.BLOG_FOUND, data: allBlogs })
    } catch (e) {
        console.log(e)
        return res.status(400).json({ message: e.message })
    }
}

export const getAllBlogs = async (req, res) => {
    try {
        const allBlogs = await Loan.find();
        // console.log(allBlogs)
        if (allBlogs === 0) {
            return res.status(404).json({ message: enums.BLOG_NOT_FOUND })
        }
        res.status(201).json({ message: enums.BLOG_FOUND, data: allBlogs })
    } catch (e) {
        // console.log(e)
        return res.status(400).json({ message: e.message })
    }
}

export const addBlog = async (req, res) => {
    const { user_name, initial_Amount, time_Duration } = req.body;
    const blogData = req.body;
    const userId = req.user.id;
    console.log(req.user);
    try {
        if (!blogData) {
            return res.status(404).json({ message: enums.BLOG_NOT_FOUND })
        }
        if (!user_name || !initial_Amount || !time_Duration) {
            return res.status(400).json({ message: enums.ALL_FIELDS_REQ })
        }
        const loanData = {
            user_name,
            time_Duration,
            initial_Amount,
            user: userId,
        }
        const loan = await Loan.create(loanData)
        res.status(201).json({ message: "Success", data: loan })
    } catch (e) {
        console.log(e.message)
        return res.status(400).json({ message: e.message })
    }
}

export const updateBlog = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    try {
        const updatedBlog = await Loan.findByIdAndUpdate(id, data)
        if (!updateBlog) {
            return res.status(404).json({ message: enums.BLOG_NOT_FOUND })
        }
        res.status(200).json({ message: enums.BLOG_UPDATED, data: updatedBlog })
    } catch (e) {
        return res.status(400).json({ message: e.message })
    }
}

export const deleteBlog = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteBlog = await Loan.findByIdAndDelete(id)
        if (!deleteBlog) {
            return res.status(404).json({ message: enums.BLOG_NOT_FOUND })
        }
        res.status(201).json({ message: enums.BLOG_DELETED })
    } catch (e) {
        return res.status(400).json({ message: e.message })
    }
}