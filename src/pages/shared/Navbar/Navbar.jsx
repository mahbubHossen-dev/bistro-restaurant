import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import toast from 'react-hot-toast';
import useCart from '../../../hooks/useCart';

const Navbar = () => {

    const {user, logoutUser} = useContext(AuthContext)
    const [cart] = useCart()
    console.log(cart)
    const logOutUser = () => {
        logoutUser()
        .then(res=> {
            toast.success('logout success')
        })
        .catch(() => {
            console.log('logout not success')
        })
    }

    const menuItems = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/menu'>Menu</NavLink></li>
        <li><NavLink to='/ourShop/salad'>Our Shop</NavLink></li>
        {
            user && <li><NavLink to='/dashboard'>{cart?.length ? cart?.length : 0}</NavLink></li>
        }
    </>
    return (
        <div className='fixed w-full z-10'>
            <div className="navbar opacity-50  max-w-7xl mx-auto  bg-black text-[#FFFFFF] font-bold">
                <div className="navbar-start flex-1">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {menuItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Bistro Boss</a>
                </div>

                <div className="navbar-end w-full">
                    <div className="navbar-end hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {menuItems}
                        </ul>
                    </div>
                    {
                        user ?
                            <Link onClick={logOutUser} className="btn">Logout</Link>
                            :
                            <>
                                <Link to={'/login'} className="btn">Login</Link>
                                <Link to={'/signUp'} className="btn">Sign Up</Link>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;



