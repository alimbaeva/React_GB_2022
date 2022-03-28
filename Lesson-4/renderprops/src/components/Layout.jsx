import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer.jsx'
import CustomLink from './CustomLink.jsx'

const Layout = () => {

    // const setActiv = ({ isActive }) => isActive ? 'active' : '';
    return (
        <>
            <header>
                {/* <NavLink className={setActiv} to={'/'}>Home</NavLink>
                <NavLink className={setActiv} to={'/posts'}>Blog</NavLink>
                <NavLink className={setActiv} to={'/about'}>About</NavLink> */}
                <CustomLink to={'/'}>Home</CustomLink>
                <CustomLink to={'/posts'}>Blog</CustomLink>
                <CustomLink to={'/about'}>About</CustomLink>
            </header>
            <div>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default Layout