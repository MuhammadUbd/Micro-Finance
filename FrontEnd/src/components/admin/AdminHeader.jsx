import React from 'react'
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router';

const AdminHeader = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, watch } = useForm();

    const onSubmit = (data) => {
        console.log("Form Data:", data);
        const uploadedFile = data.uploadFile[0]; // Access the uploaded file
        if (uploadedFile) {
            console.log("Uploaded File:", uploadedFile.name);
        }
    };
    const handleLogout = () => {
        navigate('/login')
        localStorage.clear("token")
    }

    return (
        <div className="header">
            <nav className="shadow-md p-4 flex items-center justify-between w-full">
                {/* Logo Section */}
                <div className="logo w-1/5">
                    <h1 className="text-xl font-bold">Micro-Finance</h1>
                </div>

                {/* Navigation Links */}
                <div className="routes w-3/5">
                    <ul className="flex justify-center gap-6 ">
                        <li>
                            <NavLink to='/admin-dashboard' href="#" className="hover:text-gray-300">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-300">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-300">
                                Contact
                            </a>
                        </li>
                        <li>
                            <a href="#" onClick={handleLogout} className="hover:text-gray-300">
                                Logout
                            </a>
                        </li>
                        <li>
                            <NavLink to='/admin-dashboard/users' className="hover:text-gray-300">
                                Users
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* User Profile Upload */}
                {/* <div className="user-upload w-1/5 flex justify-end items-center">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex items-center gap-4">
                        <label htmlFor="upload" className="cursor-pointer">
                            <div className="w-10 h-10 bg-gray-600 rounded-full shadow-md flex items-center justify-center">
                               
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6 text-white"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 12c2.485 0 4.5-2.015 4.5-4.5S14.485 3 12 3 7.5 5.015 7.5 7.5 9.515 12 12 12zm0 0v8.25M12 20.25h.008v.008H12v-.008z"
                                    />
                                </svg>
                            </div>
                        </label>
                        <input
                            id="upload"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            {...register("uploadFile", { required: true })}
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                        >
                            Submit
                        </button>
                    </form>
                </div> */}
            </nav>
        </div>
    );

}

export default AdminHeader
