import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Form, Input, Button, Select } from 'antd';
import { postReq } from '../api/axios';
import { useDispatch, useSelector } from "react-redux"
import { setBlog, setError } from '../store/features/blogReducer';
import { useNavigate } from 'react-router';
// import { setBlog, setError } from '../store/features/blogReducer';

const { TextArea } = Input;

const BlogForm = () => {
  const navigate = useNavigate()
  const { handleSubmit, control } = useForm();
  const dispatch = useDispatch()

  const onSubmit = async (data) => {
    console.log(data)
    // e.preventDefault()
    const formData = new FormData();
    formData.append('user_name', data.name)
    formData.append('initial_Amount', data.initial_Amount)
    formData.append('time_Duration', data.time_Duration)

    try {
      const response = await postReq('/user-dashboard/blogs/add', formData)
      const dispatchData = response?.data?.data;
      if (response) {
        navigate('/register')
        // dispatch(setBlog(dispatchData))
      }
    } catch (e) {
      console.log(e.message)
      dispatch(setError(e.message))
    }
  };


  return (
    <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Loan Form</h2>
      <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
        {/* Blog Title */}
        <Form.Item label="Name">
          <Controller
            name="name"
            control={control}
            // rules={{ required: 'Please enter the blog title' }}
            render={({ field, fieldState: { error } }) => (
              <>
                <Input {...field} placeholder="Enter Name" />
                {error && <p className="text-red-500 text-sm">{error.message}</p>}
              </>
            )}
          />
        </Form.Item>

        <Form.Item label="Initial-Amount">
          <Controller
            name="initial_Amount"
            control={control}
            // rules={{ required: 'Please enter the blog title' }}
            render={({ field, fieldState: { error } }) => (
              <>
                <Input {...field} placeholder="Enter Initial-Amount" />
                {error && <p className="text-red-500 text-sm">{error.message}</p>}
              </>
            )}
          />
        </Form.Item>

        {/* Category */}
        <Form.Item label="Duration">
          <Controller
            name="time-Duration"
            control={control}
            // rules={{ required: 'Please select a category' }}
            render={({ field, fieldState: { error } }) => (
              <>
                <Select
                  {...field}
                  placeholder="Select Time Duration"
                  onChange={(value) => field.onChange(value)}
                >
                  <Select.Option value="1">1</Select.Option>
                  <Select.Option value="2">2</Select.Option>
                  <Select.Option value="3">3</Select.Option>
                </Select>
                {error && <p className="text-red-500 text-sm">{error.message}</p>}
              </>
            )}
          />
        </Form.Item>

        {/* Image */}
        {/* <Form.Item label="Image">
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
        </Form.Item> */}


        {/* Submit Button */}
        <Button htmlType="submit" className="w-full h-9 text-white bg-zinc-800">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default BlogForm;
