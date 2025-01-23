import BlogCard from "../components/BlogCard";
import BlogForm from "../components/BlogForm";
import Dashboard from "../pages/Dashboard";
import ForgotPassword from "../pages/ForgotPassword";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ResetPassword from "../pages/ResetPassword";

export const routes = ([
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/dashboard',
        element: <Dashboard />
    },
    {
        path: '/dashboard/blogs/:id',
        element: <BlogCard />
    },
    {
        path: '/dashboard/blogs/add',
        element: <BlogForm />
    },
    // {
    //     path: '/dashboard/blogs/update/:id',
    //     element: <Blogs />
    // },
    // {
    //     path: '/dashboard/blogs/delete/:id',
    //     element: <Blogs />
    // },
    {
        path: '/reset-password/:token',
        element: <ResetPassword />
    },
    {
        path: '/forgot-password',
        element: <ForgotPassword />
    }
])