import React from 'react';

const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    
    if(loading){
        return <span className="loading loading-ring loading-lg"></span>
    }

    if(user){
        return children
    }

    return <Navigate to={'/login'}></Navigate>
};

export default AdminRoute;