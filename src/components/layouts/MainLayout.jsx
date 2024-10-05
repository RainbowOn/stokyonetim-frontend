// src/components/layouts/MainLayout.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import CustomerModal from '../modals/CustomerModal';

const MainLayout = ({ children, customers, isModalOpen, setIsModalOpen, newCustomer, handleInputChange, handleAddCustomer, showSecondProduct, setShowSecondProduct, sortedCustomers, sortConfig, requestSort, searchQuery, setSearchQuery, currentCustomers, paginate, currentPage, totalPages, itemsPerPage }) => {
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

                <div className='relative hidden md:flex items-center justify-center gap-3'>
                    <i className='bx bx-search absolute left-3 text-2xl text-gray-500'></i>
                    <input
                        type="text"
                        placeholder='Search...'
                        className='py-2 pl-10 pr-4 rounded-xl border-2 border-blue-300 focus:bg-slate-100 focus:outline-sky-500'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

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
                {children}
            </main>

            {/* Müşteri Kayıt Modal */}
            <CustomerModal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                newCustomer={newCustomer}
                handleInputChange={handleInputChange}
                handleAddCustomer={handleAddCustomer}
                showSecondProduct={showSecondProduct}
                setShowSecondProduct={setShowSecondProduct}
            />
        </div>
    );
};

export default MainLayout;
