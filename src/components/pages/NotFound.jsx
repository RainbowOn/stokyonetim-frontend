// src/components/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold mb-4">404 - Sayfa Bulunamadı</h1>
            <p className="mb-4">Aradığınız sayfa mevcut değil.</p>
            <Link to="/" className="text-blue-500 hover:underline">Anasayfaya Dön</Link>
        </div>
    );
};

export default NotFound;
