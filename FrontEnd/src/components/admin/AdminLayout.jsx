import React from 'react'
// import HeaderComponent from '../FrontEnd/src/components/user/Header'
import { Outlet } from 'react-router'
import Footer from '../../components/Footer'
import AdminHeader from './AdminHeader'

const AdminLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <AdminHeader />
            <main className="flex-grow container mx-auto p-4">
                <div className=''>
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default AdminLayout
