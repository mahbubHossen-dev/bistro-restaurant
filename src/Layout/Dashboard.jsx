import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaCcAmazonPay, FaHome } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import useAdmin from '../hooks/useAdmin';


const Dashboard = () => {

    const [isAdmin] = useAdmin();
    console.log(isAdmin)
    return (
        <div className='flex gap-6'>
            <div className='bg-orange-400 min-h-screen p-4 w-[250px]'>
                <ul className='text-white  text-lg'>
                    {
                        isAdmin ? 
                        <>
                            <li className=''>
                                <NavLink className='flex items-center gap-2' to={'/dashboard/adminHome'}><FaHome /> Admin Home</NavLink>
                            </li>

                            <li>
                                <NavLink className='flex items-center gap-2' to={'/dashboard/addItems'}><FaCcAmazonPay /> Add Items</NavLink>
                            </li>

                            <li>
                                <NavLink className='flex items-center gap-2' to={'/dashboard/manageItems'}><FaShoppingCart /> Manage Items</NavLink>
                            </li>

                            <li>
                                <NavLink className='flex items-center gap-2' to={'/dashboard/manageBookings'}><SlCalender /> Manage Bookings</NavLink>
                            </li>
                            <li>
                                <NavLink className='flex items-center gap-2' to={'/dashboard/allUsers'}><MdOutlineRateReview /> All Users</NavLink>
                            </li>
                        </> :
                            <>
                                <li className=''>
                                    <NavLink className='flex items-center gap-2' to={'/dashboard/userHome'}><FaHome /> User Home</NavLink>
                                </li>

                                <li>
                                    <NavLink className='flex items-center gap-2' to={'/dashboard/paymentHistory'}><FaCcAmazonPay /> Payment history</NavLink>
                                </li>

                                <li>
                                    <NavLink className='flex items-center gap-2' to={'/dashboard/myCart'}><FaShoppingCart /> My Cart</NavLink>
                                </li>

                                <li>
                                    <NavLink className='flex items-center gap-2' to={'/dashboard/reservation'}><SlCalender /> Reservation</NavLink>
                                </li>
                                <li>
                                    <NavLink className='flex items-center gap-2' to={'/dashboard/addReview'}><MdOutlineRateReview /> Add review</NavLink>
                                </li>
                                <li>
                                    <NavLink className='flex items-center gap-2' to={'/dashboard/myBooking'}><TbBrandBooking /> bookings</NavLink>
                                </li>
                            </>
                    }

                    <div className='divider'></div>
                    <li>
                        <NavLink className='flex items-center gap-2' to={'/'}><TbBrandBooking /> Home</NavLink>
                    </li>
                    <li>
                        <NavLink className='flex items-center gap-2' to={'/menu'}><TbBrandBooking /> Menu</NavLink>
                    </li>
                    <li>
                        <NavLink className='flex items-center gap-2' to={'/ourShop/salad'}><TbBrandBooking /> Our Shop</NavLink>
                    </li>
                </ul>
            </div>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;