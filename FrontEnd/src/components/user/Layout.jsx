import React from 'react'
import HeaderComponent from './Header'
import { Outlet } from 'react-router'
import Footer from '../Footer'
import AdminHeader from '../admin/AdminHeader'

const Layout = () => {
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

export default Layout
