import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Form, Input, Button, Select } from 'antd';
import { postReq } from '../api/axios';
import { useDispatch, useSelector } from "react-redux"
import { setBlog, setError } from '../store/features/blogReducer';
// import { setBlog, setError } from '../store/features/blogReducer';

const { TextArea } = Input;

const BlogForm = () => {
  const { handleSubmit, control } = useForm();
  const dispatch = useDispatch()
  // const [isSubmitted, setIsSubmitted] = useState(false)

  const onSubmit = async (data) => {
    // e.preventDefault()
    const formData = new FormData();
    formData.append('blog_Title', data.blog_Title)
    formData.append('blog_Description', data.blog_Description)
    formData.append('blog_Author', data.blog_Author)
    formData.append('blog_Category', data.blog_Category)
    formData.append("thumbnail", data.blog_Image)
    console.log('Form Data:', data);
    try {
      const response = await postReq('/dashboard/blogs/add', formData, true)
      const dispatchData = response?.data?.data;
      if (response) {
        dispatch(setBlog(dispatchData))
      }
    } catch (e) {
      dispatch(setError(e.message))
    }
  };

  // useEffect(() => {
  //   if (isSubmitted) {
  //     // This code will run after form submission (because isSubmitted state is updated)
  //     alert('Blog added successfully!');
  //     setIsSubmitted(false); // Reset the submitted state
  //   }
  // }, [isSubmitted]);

  return (
    <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Create a New Blog</h2>
      <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
        {/* Blog Title */}
        <Form.Item label="Title">
          <Controller
            name="blog_Title"
            control={control}
            // rules={{ required: 'Please enter the blog title' }}
            render={({ field, fieldState: { error } }) => (
              <>
                <Input {...field} placeholder="Enter blog title" />
                {error && <p className="text-red-500 text-sm">{error.message}</p>}
              </>
            )}
          />
        </Form.Item>

        {/* Description */}
        <Form.Item label="Description">
          <Controller
            name="blog_Description"
            control={control}
            // rules={{ required: 'Please enter the description' }}
            render={({ field, fieldState: { error } }) => (
              <>
                <TextArea {...field} rows={4} placeholder="Enter blog description" />
                {error && <p className="text-red-500 text-sm">{error.message}</p>}
              </>
            )}
          />
        </Form.Item>

        {/* Author */}
        <Form.Item label="Author">
          <Controller
            name="blog_Author"
            control={control}
            // rules={{ required: 'Please enter the author name' }}
            render={({ field, fieldState: { error } }) => (
              <>
                <Input {...field} placeholder="Enter author name" />
                {error && <p className="text-red-500 text-sm">{error.message}</p>}
              </>
            )}
          />
        </Form.Item>

        {/* Category */}
        <Form.Item label="Category">
          <Controller
            name="blog_Category"
            control={control}
            // rules={{ required: 'Please select a category' }}
            render={({ field, fieldState: { error } }) => (
              <>
                <Select
                  {...field}
                  placeholder="Select a category"
                  onChange={(value) => field.onChange(value)}
                >
                  <Select.Option value="technology">Technology</Select.Option>
                  <Select.Option value="lifestyle">Lifestyle</Select.Option>
                  <Select.Option value="finance">Finance</Select.Option>
                </Select>
                {error && <p className="text-red-500 text-sm">{error.message}</p>}
              </>
            )}
          />
        </Form.Item>

        {/* Image */}
        <Form.Item label="Image">
          <Controller
            name="blog_Image"
            control={control}
            render={({ field }) => (
              <input
                type="file"
                name="thumbnail" // Field name must match the multer configuration
                onChange={(e) => {
                  const file = e.target.files[0]; // Get the selected file
                  if (!file) {
                    console.error("No file selected");
                    return;
                  }
                  field.onChange(file)
                }}
              />
            )}
          />
        </Form.Item>


        {/* Submit Button */}
        <Button htmlType="submit" className="w-full h-9 text-white bg-zinc-800">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default BlogForm;
