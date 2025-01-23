import { Form, Input, Button, Typography } from "antd";
import React, { useEffect, useState } from 'react'
import { Controller, useForm } from "react-hook-form"
import { postReq } from '../api/axios';
import { NavLink, useNavigate } from 'react-router';
// import { Button, Form, Input, Radio } from 'antd';
import toast from 'react-hot-toast';

export const ForgotForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // yhi account hai ?
  const onSubmit = async (data) => {
    try {
      const response = await postReq("/auth/forgot-password", data);
      console.log(response)
    } catch (e) {
      console.log(e.message)
    }
  };

  const { Title, Text } = Typography;
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <Typography.Title level={3} className="text-center text-gray-800 mb-6">
          Forgot Password
        </Typography.Title>
        <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
          {/* Email Field */}
          <Form.Item
            label="Email"
            validateStatus={errors.email ? "error" : ""}
            help={errors.email ? errors.email.message : ""}
          >
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Enter a valid email",
                },
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="example@mail.com"
                  className="rounded-lg"
                />
              )}
            />
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Send Reset Link
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>

    // <div className="flex items-center justify-center min-h-screen bg-gray-100">
    //   <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
    //     <Title level={3} className="text-center text-gray-800 mb-6">
    //       Forgot Password
    //     </Title>
    //     <Form
    //       layout="vertical"
    //       onFinish={handleSubmit(onSubmit)} // Use react-hook-form's handleSubmit
    //       className="space-y-4"
    //     >
    //       {/* Email Field */}
    //       <Form.Item
    //         label="Email"
    //         name="email"
    //         // rules={[
    //         //   { required: true, message: "Email is required" },
    //         //   {
    //         //     type: "email",
    //         //     message: "Enter a valid email",
    //         //   },
    //         // ]}
    //       >
    //         <Input
    //           placeholder="example@mail.com"
    //           className="rounded-lg"
    //           {...register("email", {
    //             pattern: {
    //               value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
    //               message: "Enter a valid email",
    //             }
    //           })}
    //         />
    //       </Form.Item>

    //       {/* Submit Button */}
    //       <Form.Item>
    //         <Button
    //           type="primary"
    //           htmlType="submit"
    //           className="w-full"
    //         >
    //           Send Reset Link
    //         </Button>
    //       </Form.Item>
    //     </Form>
    //   </div>
    // </div>

  )
}

export default ForgotForm
