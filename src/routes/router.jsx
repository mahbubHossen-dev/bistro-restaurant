import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import OurShop from "../pages/OurShop/OurShop";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "../pages/shared/PrivateRoute/PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Cart/Cart";
import Payment from "../pages/Payment/Payment";
import AllUsers from "../pages/AllUsers/AllUsers";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/menu',
                element: <Menu />
            },
            {
                path: '/ourShop/:category',
                element: <OurShop />
            },
            {
                path: '/login',
                element: <Login /> 
            },
            {
                path: '/signUp',
                element: <SignUp /> 
            }
            
        ]
    },
    {
        path:'/dashboard',
        element: <Dashboard />,
        children: [
            {
                path: '/dashboard/myCart',
                element: <Cart />
            },
            {
                path: '/dashboard/paymentHistory',
                element: <Payment />
            },

            // Admin panel
            {
                path: '/dashboard/allUsers',
                element: <AllUsers />
            }
        ]
    }
])

export default router