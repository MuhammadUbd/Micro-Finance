import React, { useEffect } from "react";
import img3 from "/assets/images/final.jpg"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";


const BlogList = () => {
  const navigate = useNavigate()
  const selector = useSelector((state) => state?.blog?.blogs)
  // const arr = [...selector]
  console.log(selector)

  return (
    <div className="max-w-3xl w-auto mt-10 space-y-4 m-auto">
      {selector?.map((blog, index) => (
        <div
          key={index}
          className="flex items-center p-4 bg-white shadow-md rounded-md"
        >
          <img
            src={blog.blog_Image}
            alt={blog.blog_Title}
            className="w-20 h-20 object-cover rounded-md"
          />
          <div className="flex-1 ml-4">
            <h2 className="text-lg font-semibold">{blog.blog_Title}</h2>
            <p className="text-gray-600 text-sm mt-1">{blog.blog_Description}</p>
          </div>
          <button onClick={() => navigate(`/dashboard/blogs/${blog._id}`)} className="ml-4 px-4 py-1.5 bg-zinc-800 text-white rounded-md hover:bg-zinc-600">
            View
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
