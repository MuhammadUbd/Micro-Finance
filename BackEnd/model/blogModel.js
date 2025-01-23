import mongoose from "mongoose";

const BlogModel = mongoose.Schema({
    blog_Title: {type: String, required: true},
    blog_Description: {type: String, required: true},
    blog_Author: {type: String, required: true},
    blog_Image: {type: String, required: true},
    blog_Category: {type: String, required: true},
    createdAt: { type: Date, default: Date.now }
})

export const Blog = mongoose.model("blogs", BlogModel)