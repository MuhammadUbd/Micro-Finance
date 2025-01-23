import { enums } from "../enums/enum.js";
import { Blog } from "../model/blogModel.js";

export const getBlog = async (req, res) => {
    try {
        const allBlogs = await Blog.find();
        if (!allBlogs) {
            return res.status(404).json({ message: enums.BLOG_NOT_FOUND })
        }
        res.status(201).json({ message: enums.BLOG_FOUND, data: allBlogs })
    } catch (e) {
        return res.status(400).json({ message: e.message })
    }
}


export const addBlog = async (req, res) => {
    const { blog_Title, blog_Description, blog_Author, blog_Category } = req.body;
    const blogData = req.body;
    // console.log(thumbnail)
    console.log(req?.body);
    console.log(req.file)
    const thumbnail = req.file.path
    if (!req?.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }
    // const thumbnail = req.file.secure_url || req.file.url;
    try {
        if (!thumbnail) {
            return res.status(500).json({ error: 'Failed to upload image to Cloudinary' });
        }
        if (!blogData) {
            return res.status(404).json({ message: enums.BLOG_NOT_FOUND })
        }
        // if (!blog_Title || !blog_Description || !blog_Author || !thumbnail || !blog_Category) {
        //     return res.status(400).json({ message: enums.ALL_FIELDS_REQ })
        // }
        const blogData2 = {
            blog_Title,
            blog_Description,
            blog_Author,
            blog_Category,
            blog_Image: thumbnail,
        }
        const blog = await Blog.create(blogData2)
        res.status(201).json({ message: enums.BLOG_CREATED, data: blog })
    } catch (e) {
        return res.status(400).json({ message: e.message })
    }
}

export const updateBlog = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(id, data)
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
        const deleteBlog = await Blog.findByIdAndDelete(id)
        if (!deleteBlog) {
            return res.status(404).json({ message: enums.BLOG_NOT_FOUND })
        }
        res.status(201).json({ message: enums.BLOG_DELETED })
    } catch (e) {
        return res.status(400).json({ message: e.message })
    }
}