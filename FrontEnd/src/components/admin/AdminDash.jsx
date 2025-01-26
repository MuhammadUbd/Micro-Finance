import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import LandPage from '../Landing'
import BlogList from '../BlogList'
import AdminHeader from './AdminHeader'

const AdminDashComponent = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const item = localStorage.getItem("token");
        if (!item) {
            navigate('/login')
        }
    }, [])
    return (
        <div className="flex flex-col min-h-screen">
            {/* <AdminHeader /> */}
            <LandPage />
            <main className="flex-grow container mx-auto p-4">
                <div className=''>
                    <BlogList />
                </div>
            </main>
        </div>
    )
}

export default AdminDashComponent
