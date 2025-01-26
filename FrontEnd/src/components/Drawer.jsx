import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { MenuOutlined } from "@ant-design/icons"
import { NavLink } from 'react-router';
const DrawerComponent = () => {
    const handleLogout = () => {
        navigate('/login')
        localStorage.clear("token")
    }
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    return (
        <>
            <div className='bg-none text-xl px-2 text-white cursor-pointer' onClick={showDrawer}>
                <MenuOutlined />
            </div>
            <Drawer title="Wix Studio" onClose={onClose} open={open} className='bg-zinc-800'>
                <div className='py-1.5'>
                    <p className='text-[15px]'><NavLink href="" to='/dashboard'>Dashboard</NavLink></p>
                </div>
                <div className='py-1.5'>
                    <p className='text-[15px]'><NavLink href="">Profile</NavLink></p>
                </div>
                <div className='py-1.5'>
                    <p className='text-[15px]'><NavLink to='/dashboard/blogs'>Blogs</NavLink></p>
                </div>
                <div className='py-1.5'>
                    <p className='text-[15px]'><NavLink to='/dashboard/blogs/add' >Add Blogs</NavLink></p>
                </div>
                {/* <div className='py-1.5'>
                    <p className='text-[15px]'><a href="" onClick={handleLogout}>Log-Out</a></p>
                </div> */}
            </Drawer>
        </>
    );
};
export default DrawerComponent;