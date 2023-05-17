import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
       return  <progress className="progress w-56 mt-20"></progress>
    }

    if(user){
        return children
    }
    return <Navigate state={{from: location}} to='/login' replace></Navigate>
};

export default PrivateRoutes;