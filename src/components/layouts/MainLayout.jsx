// src/components/layouts/MainLayout.jsx
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../../assets/logo.png';
import CustomerModal from '../modals/CustomerModal';

export const MainLayout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='min-h-screen w-full flex flex-col items-center bg-gradient-to-r from-blue-400 to-emerald-400'>
            {/* Navbar Bölümü */}
            <header className='w-full flex justify-between items-center text-black py-6 px-8 md:px-32 bg-white drop-shadow-md'>
                <Link to="/">
                    <img src={logo} alt="Logo" className='w-52 hover:scale-105 transition-all' />
                </Link>
                <ul className='hidden xl:flex items-center gap-12 font-semibold text-base'>
                    <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer'>
                        <Link to="/">Anasayfa</Link>
                    </li>
                    <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer'>
                        <Link to="/randevular">Randevular</Link>
                    </li>
                    <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer'>
                        <Link to="/islemler">İşlemler</Link>
                    </li>
                    <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer'>
                        <Link to="/profil">Profil</Link>
                    </li>
                </ul>

                <i className='bx bx-menu xl:hidden block text-5xl cursor-pointer' onClick={() => setIsMenuOpen(!isMenuOpen)}></i>

                {isMenuOpen && (
                    <ul className='absolute xl:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform'>
                        <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>
                            <Link to="/">Anasayfa</Link>
                        </li>
                        <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>
                            <Link to="/randevular">Randevular</Link>
                        </li>
                        <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>
                            <Link to="/islemler">İşlemler</Link>
                        </li>
                        <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>
                            <Link to="/profil">Profil</Link>
                        </li>
                        <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>
                            <Link to="/login">Giriş Yap</Link>
                        </li>
                    </ul>
                )}
            </header>

            {/* Sayfa İçeriği */}
            <main className="p-8 w-full max-w-min mx-auto">
                <Outlet />
            </main>
        </div>
    );

};

export default MainLayout;
