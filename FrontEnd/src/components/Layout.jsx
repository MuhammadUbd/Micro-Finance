import React from 'react'
import HeaderComponent from './Header'
import { Outlet } from 'react-router'
import Footer from './Footer'

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <HeaderComponent />
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
