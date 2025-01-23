import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import HeaderComponent from './Header'
import Footer from './Footer'
import LandPage from './Landing'
import BlogList from './BlogList'

const DashboardComponent = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        navigate('/login')
        localStorage.clear("token")
    }
    useEffect(() => {
        const item = localStorage.getItem("token");
        if (!item) {
            navigate('/login')
        }
    }, [])
    return (
        <div className="flex flex-col min-h-screen">
            <LandPage />
            <main className="flex-grow container mx-auto p-4">
                <div className=''>
                    <BlogList />
                </div>
            </main>
        </div>
    )
}

export default DashboardComponent

{/* <div className="create">
    <h1 className='text-[45px] text-center my-5 font-semibold'>Create Blogs</h1>
</div> */}
{/* <BlogForm /> */ }
{/* <div className="card">
    <h1 className='text-[45px] text-center my-10 font-semibold'>Blog Cards</h1>
</div> */}
{/* <BlogCard
        title="Sample Blog"
        description="This is a sample blog description."
        author="John Doe"
        category="Technology"
        image="https://via.placeholder.com/150"
        /> */}