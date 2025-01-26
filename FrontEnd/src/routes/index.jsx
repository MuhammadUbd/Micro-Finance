import BlogCard from "../components/BlogCard";
import BlogForm from "../components/BlogForm";
import BlogList from "../components/BlogList";
import AdminDashboard from "../pages/AdminDashboard";
import Dashboard from "../pages/Dashboard";
import ForgotPassword from "../pages/ForgotPassword";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ResetPassword from "../pages/ResetPassword";
// import AdminLayout from "../layouts/AdminLayout";
// import UserLayout from "../layouts/UserLayout";
import AdminLayout from "../components/admin/AdminLayout";
import Layout from "../components/user/Layout";
import UserData from "../components/UserData";
import ConstructionService from "../components/ConstructionService";
import EducationService from "../components/EducationService";
import BusinessService from "../components/BusinessService";
import WeddingServices from "../components/WeddingServices";

export const routes = [
    // Public Routes
    {
        path: "/",
        element: <Dashboard />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/forgot-password",
        element: <ForgotPassword />,
    },
    {
        path: "/reset-password/:token",
        element: <ResetPassword />,
    },

    // User Dashboard Routes (wrapped with UserLayout)
    // {
    //     path: "/user-dashboard",
    //     element: <Layout />,
    // },
    // children: [
    {
        path: "/user-dashboard",
        element: <Dashboard />,
    },
    {
        path: "/user-dashboard/wedding",
        element: <WeddingServices />
    },
    {
        path: "/user-dashboard/home-construction",
        element: <ConstructionService />
    },
    {
        path: "/user-dashboard/education",
        element: <EducationService />
    },
    {
        path: "/user-dashboard/business",
        element: <BusinessService />
    },
    {
        path: "/user-dashboard/blogs",
        element: <BlogList />,
    },
    {
        path: "/user-dashboard/blogs/add",
        element: <BlogForm />,
    },

    // Admin Dashboard Routes (wrapped with AdminLayout)
    // {
    //     // path: "/admin-dashboard",
    //     // element: <AdminLayout />,
    //     // children: [
    //     //     {
    //     //         path: "",
    //     //         element: <AdminDashboard />,
    //     //     },
    //     //     // Add more admin-specific routes here
    //     // ],
    // },
    {
        path: "/admin-dashboard",
        element: <AdminDashboard />,
    },
    {
        path: "/admin-dashboard/users",
        element: <UserData />
    }
];
