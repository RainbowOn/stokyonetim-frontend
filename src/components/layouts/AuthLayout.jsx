// src/components/layouts/AuthLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
    return (
        <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-emerald-400'>
            <Outlet />
        </div>
    );
};

export default AuthLayout;
