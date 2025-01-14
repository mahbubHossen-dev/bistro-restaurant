import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';
import useAdmin from '../../../hooks/useAdmin';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin()
    if(loading || isAdminLoading){
        return <span className="loading loading-ring loading-lg"></span>
    }

    if(user && isAdmin){
        return children
    }

    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRoute;