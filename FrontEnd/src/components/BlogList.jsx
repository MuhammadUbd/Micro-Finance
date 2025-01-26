import React, { useEffect } from "react";
import img3 from "/assets/images/final.jpg"
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router";
// import { getReq } from "../../api/axios";
// import { setBlog } from "../../store/features/blogReducer";
import { getReq } from "../api/axios";
import { setBlog } from "../store/features/blogReducer";
// import { Card } from "antd";
// import Title from "antd/es/skeleton/Title";
const { Title, Text } = Typography;
import { Card, Button, Space, Typography } from 'antd';
import { cardData } from "../utils";


const BlogList = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const selector = useSelector((state) => state?.blog?.blogs)
  console.log(selector)
  const getBlogs = async () => {
    try {
      const response = await getReq("/dashboard/blogs")
      console.log(response)
      const dispatchData = response?.data?.data
      if (response) {
        dispatch(setBlog(dispatchData))
      }
    } catch (e) {
      console.log(e.message)
      dispatch(setError(e.message))
    }
  }
  useEffect(() => {
    getBlogs()
  }, [])

  return (
    <div className="flex flex-wrap m-4">
      {cardData.map((item, index) => {
        return (
          <Card
            key={index}
            hoverable
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src={item.image}
                style={{ height: 200, objectFit: 'cover' }}
              />
            }
          >
            <Title level={4}>{item.title}</Title>
            <br />
            <div style={{ marginTop: 16 }}>
              <Space>
                <Button >
                  <NavLink to={item.route}>
                    {item.view}
                  </NavLink>
                </Button>
              </Space>
            </div>
          </Card>
        )
      })}
    </div>
    // <div className="max-w-3xl w-auto mt-10 space-y-4 m-auto">
    //   {selector?.map((blog, index) => (
    //     <div
    //       key={index}
    //       className="flex items-center p-4 bg-white shadow-md rounded-md"
    //     >
    //       <img
    //         src={blog.blog_Image}
    //         alt={blog.blog_Title}
    //         className="w-20 h-20 object-cover rounded-md"
    //       />
    //       <div className="flex-1 ml-4">
    //         <h2 className="text-lg font-semibold">{blog.blog_Title}</h2>
    //         <p className="text-gray-600 text-sm mt-1">{blog.blog_Description}</p>
    //       </div>
    //       <button onClick={() => navigate(`/dashboard/blogs/${blog._id}`)} className="ml-4 px-4 py-1.5 bg-zinc-800 text-white rounded-md hover:bg-zinc-600">
    //         View
    //       </button>
    //     </div>
    //   ))}
    // </div>
  );
};

export default BlogList;
