import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ( {children,...rest}) => {
    const location=useLocation()
    const {user,isLoading}=useAuth()
    return (
        <div>
              {user.email?
            children:
            <Navigate {...rest} to='/login' state={{ from: location }}  replace ></Navigate>

            }
        </div>
    );
};

export default PrivateRoute;