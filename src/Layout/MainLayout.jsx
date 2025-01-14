import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../pages/shared/Navbar/Navbar';
import Footer from '../pages/shared/Footer/Footer';

const MainLayout = () => {
    const location = useLocation()
    console.log(location.pathname)
    const loginWithOutNav =  location.pathname.includes('/login')
    const SignUpWithOutNav =  location.pathname.includes('/signUp')
    return (
        <div className=''>
            {
                loginWithOutNav || <Navbar /> && 
                SignUpWithOutNav || <Navbar />
            }
            
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;