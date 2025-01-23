import { postReq } from '../api/axios';
import { useEffect, useState } from 'react'
import { Controller, useForm } from "react-hook-form"
import { NavLink, useNavigate } from 'react-router';
import { Button, Form, Input } from 'antd';
import { toast } from 'react-hot-toast';


export const RegisterComponent = () => {
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
            navigate('/dashboard')
        }
    }, [])
    const onSubmit = async (data) => {
        try {
            const response = await postReq('/auth/register', data);
            console.log('Response:', response);
            navigate('/login')
        } catch (e) {
            console.log(e)
        }
    };

    return (
        <>
            <h1 className="text-center text-3xl font-bold py-5">Register Form</h1>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <Form
                    layout={formLayout}
                    form={form}
                    initialValues={{
                        layout: formLayout,
                    }}
                    onValuesChange={onFormLayoutChange}
                    onFinish={handleSubmit(onSubmit)} // Use react-hook-form's handleSubmit
                    className="bg-white rounded-lg shadow-lg p-8 w-[450px] flex flex-col space-y-6"
                >
                    <div className="flex flex-col space-y-4">
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
                    </div>
                    <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                        <Form.Item label="Role" className="flex flex-col space-y-2 w-full">
                            <Controller
                                name="role"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <Input placeholder="Enter your role" className="w-full" {...field} />
                                )}
                            />
                        </Form.Item>
                        <Form.Item label="Username" className="flex flex-col space-y-2 w-full">
                            <Controller
                                name="username"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <Input placeholder="Enter your username" className="w-full" {...field} />
                                )}
                            />
                        </Form.Item>
                    </div>
                    <div className="flex flex-col items-center space-y-4">
                        <NavLink to="/login" className="text-blue-600 hover:underline">
                            Already have an account?
                        </NavLink>
                        <Form.Item>
                            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded" htmlType="submit">
                                Register
                            </Button>
                        </Form.Item>
                    </div>
                </Form>
            </div>
        </>
    );
};


export default RegisterComponent
