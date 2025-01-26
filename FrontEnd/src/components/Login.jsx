import React, { useEffect, useState } from 'react'
import { Controller, useForm } from "react-hook-form"
import { postReq } from '../api/axios';
import { NavLink, useNavigate } from 'react-router';
import { Button, Form, Input, Radio } from 'antd';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';


const LoginComponent = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('vertical');
    const { control, handleSubmit, formState: { errors } } = useForm();

    const onFormLayoutChange = ({ layout }) => {
        setFormLayout(layout);
    };
    useEffect(() => {
        const item = localStorage.getItem("token");
        if (item) {
            navigate('/user-dashboard')
        }
    }, [])
    const onSubmit = async (data) => {
        try {
            const response = await postReq('/auth/login', data);
            console.log('Response:', response);
            const role = response?.data?.user?.role;
            const token = response?.data?.token;
            console.log(token)
            localStorage.setItem("token", token)
            // if (role === "admin") {
            //     navigate('/admin-dashboard')
            // } else {
            //     navigate('/dashboard')
            // }
            if (token) {
                if (role === "admin") {
                    navigate('/admin-dashboard')
                } else {
                    navigate('/user-dashboard')
                }
            }
        } catch (e) {
            console.log(e)
        }
    };

    return (
        <>
            <h1 className="text-center text-2xl font-bold py-5">Login Form</h1>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <Form
                    layout={formLayout}
                    form={form}
                    initialValues={{
                        layout: formLayout,
                    }}
                    onValuesChange={onFormLayoutChange}
                    onFinish={handleSubmit(onSubmit)}
                    className="bg-white rounded-lg shadow-lg p-8 w-[400px] flex flex-col space-y-6 bg-slate-300"
                >
                    <div>
                        <Form.Item label="Email" className="flex flex-col space-y-2">
                            <Controller
                                name="email"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <Input placeholder="Enter your email" className="w-full" {...field} />
                                )}
                            />
                            {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
                        </Form.Item>
                    </div>
                    <div>
                        <Form.Item label="Password" className="flex flex-col space-y-2">
                            <Controller
                                name="password"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <Input.Password placeholder="Enter your password" className="w-full" {...field} />
                                )}
                            />
                            {errors.password && <span className="text-red-500 text-sm">This field is required</span>}
                        </Form.Item>
                        {/* <Form.Item label="CNIC" className="flex flex-col space-y-2">
                            <Controller
                                name="CNIC"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <Input.Password placeholder="Enter your CNIC" className="w-full" {...field} />
                                )}
                            />
                            {errors.password && <span className="text-red-500 text-sm">This field is required</span>}
                        </Form.Item> */}
                    </div>
                    <Form.Item className="flex flex-col space-y-4">
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded" htmlType="submit">
                            Login
                        </Button>
                        <NavLink to="/forgot-password" className="text-blue-600 hover:underline text-center">
                            Forgot Password?
                        </NavLink>
                    </Form.Item>
                    <div className="text-center">
                        <span>Don't have an account? </span>
                        <NavLink to="/register" className="text-blue-600 hover:underline">
                            Register here
                        </NavLink>
                    </div>
                </Form>
            </div>
        </>
    );
};




export default LoginComponent
