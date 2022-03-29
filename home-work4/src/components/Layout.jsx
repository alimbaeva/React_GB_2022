import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import CustomLink from './CustomLinks';

const Layout = () => {
    return (
        <>
            <header>
                <CustomLink to={'/'}>Home</CustomLink>
                <CustomLink to={'/chats'}>Chats</CustomLink>
                <CustomLink to={'/profile'}>Profile</CustomLink>
            </header>
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout