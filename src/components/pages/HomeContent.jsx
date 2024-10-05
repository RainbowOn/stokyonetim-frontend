// src/components/pages/HomeContent.jsx
import React from 'react';
import CustomerModal from './CustomerModal'; // Doğru yolu kullandığınızdan emin olun

const HomeContent = ({
    customers,
    isModalOpen,
    setIsModalOpen,
    newCustomer,
    handleInputChange,
    handleAddCustomer,
    showSecondProduct,
    setShowSecondProduct,
    sortedCustomers,
    sortConfig,
    requestSort,
    searchQuery,
    setSearchQuery,
    currentCustomers,
    paginate,
    currentPage,
    totalPages,
    itemsPerPage
}) => {
    return (
        <>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-white">Müşteri Listesi</h1>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => setIsModalOpen(true)}
                >
                    Kayıt Ekle
                </button>
            </div>

            {/* Customer Table */}
            <div className="overflow-x-auto bg-white p-6 rounded-lg shadow-md">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th
                                className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-gray-700 uppercase tracking-wider cursor-pointer"
                                onClick={() => requestSort('id')}
                            >
                                ID {sortConfig.key === 'id' ? (sortConfig.direction === 'ascending' ? '🔼' : '🔽') : null}
                            </th>
                            <th
                                className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-gray-700 uppercase tracking-wider cursor-pointer"
                                onClick={() => requestSort('isim')}
                            >
                                İsim {sortConfig.key === 'isim' ? (sortConfig.direction === 'ascending' ? '🔼' : '🔽') : null}
                            </th>
                            <th
                                className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-gray-700 uppercase tracking-wider cursor-pointer"
                                onClick={() => requestSort('soyisim')}
                            >
                                Soyisim {sortConfig.key === 'soyisim' ? (sortConfig.direction === 'ascending' ? '🔼' : '🔽') : null}
                            </th>
                            <th
                                className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-gray-700 uppercase tracking-wider cursor-pointer"
                                onClick={() => requestSort('raf_numarasi')}
                            >
                                Raf No {sortConfig.key === 'raf_numarasi' ? (sortConfig.direction === 'ascending' ? '🔼' : '🔽') : null}
                            </th>
                            <th
                                className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-gray-700 uppercase tracking-wider cursor-pointer"
                                onClick={() => requestSort('arac_plakasi')}
                            >
                                Plaka {sortConfig.key === 'arac_plakasi' ? (sortConfig.direction === 'ascending' ? '🔼' : '🔽') : null}
                            </th>
                            <th
                                className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-gray-700 uppercase tracking-wider cursor-pointer"
                                onClick={() => requestSort('urun_ebadi')}
                            >
                                Ürün Ebadı {sortConfig.key === 'urun_ebadi' ? (sortConfig.direction === 'ascending' ? '🔼' : '🔽') : null}
                            </th>
                            <th
                                className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-gray-700 uppercase tracking-wider cursor-pointer"
                                onClick={() => requestSort('urun_adi')}
                            >
                                Ürün Adı {sortConfig.key === 'urun_adi' ? (sortConfig.direction === 'ascending' ? '🔼' : '🔽') : null}
                            </th>
                            <th
                                className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-gray-700 uppercase tracking-wider cursor-pointer"
                                onClick={() => requestSort('urun_markasi')}
                            >
                                Ürün Markası {sortConfig.key === 'urun_markasi' ? (sortConfig.direction === 'ascending' ? '🔼' : '🔽') : null}
                            </th>
                            <th
                                className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-gray-700 uppercase tracking-wider cursor-pointer"
                                onClick={() => requestSort('durum')}
                            >
                                Durum {sortConfig.key === 'durum' ? (sortConfig.direction === 'ascending' ? '🔼' : '🔽') : null}
                            </th>
                            <th
                                className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-gray-700 uppercase tracking-wider cursor-pointer"
                                onClick={() => requestSort('geri_sayim')}
                            >
                                Geri Sayım {sortConfig.key === 'geri_sayim' ? (sortConfig.direction === 'ascending' ? '🔼' : '🔽') : null}
                            </th>
                            <th className="py-3 px-6 bg-gray-200 text-center text-xs font-medium text-gray-700 uppercase tracking-wider">
                                İşlemler
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentCustomers.length > 0 ? (
                            currentCustomers.map((customer) => {
                                const calculateColor = (daysLeft) => {
                                    if (daysLeft >= 240) {
                                        return 'bg-green-500';
                                    } else if (daysLeft >= 120) {
                                        return 'bg-yellow-500';
                                    } else {
                                        return 'bg-red-500';
                                    }
                                };

                                return (
                                    <tr key={customer.id} className="border-b hover:bg-gray-100">
                                        <td className="py-4 px-6 text-sm text-gray-700">{customer.id}</td>
                                        <td className="py-4 px-6 text-sm text-gray-700">{customer.isim}</td>
                                        <td className="py-4 px-6 text-sm text-gray-700">{customer.soyisim}</td>
                                        <td className="py-4 px-6 text-sm text-gray-700">{customer.raf_numarasi}</td>
                                        <td className="py-4 px-6 text-sm text-gray-700">{customer.arac_plakasi}</td>
                                        <td className="py-4 px-6 text-sm text-gray-700">{customer.urun_ebadi}</td>
                                        <td className="py-4 px-6 text-sm text-gray-700">{customer.urun_adi}</td>
                                        <td className="py-4 px-6 text-sm text-gray-700">{customer.urun_markasi}</td>
                                        <td className='py-4 px-6 text-sm'>
                                            <span className={`px-2 py-1 rounded-full text-white ${customer.durum === 'Aktif' ? 'bg-green-500' : customer.durum === 'Teslim Edildi' ? 'bg-yellow-500' : 'bg-red-500'}`}>
                                                {customer.durum}
                                            </span>
                                        </td>
                                        <td className="py-4 px-6 text-sm">
                                            <span className={`px-2 py-1 rounded-full text-white ${calculateColor(customer.geri_sayim)}`}>
                                                {customer.geri_sayim}
                                            </span>
                                        </td>
                                        <td className="py-4 px-6 text-sm flex justify-center gap-2">
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white px-3 py-1 rounded">Detay</button>
                                            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded">Teslim Et</button>
                                            <button className="bg-green-500 hover:bg-green-700 text-white px-3 py-1 rounded">Randevu Oluştur</button>
                                            <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">Sil</button>
                                        </td>
                                    </tr>
                                );
                            })
                        ) : (
                            <tr>
                                <td colSpan="11" className="py-4 px-6 text-center text-gray-500">
                                    Yükleniyor veya müşteri kaydı yok...
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center mt-4">
                <nav className="inline-flex -space-x-px">
                    <button
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}`}
                    >
                        Önceki
                    </button>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => paginate(index + 1)}
                            className={`px-3 py-2 leading-tight border border-gray-300 ${currentPage === index + 1 ? 'text-blue-600 bg-blue-50' : 'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700'}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''}`}
                    >
                        Sonraki
                    </button>
                </nav>
            </div>
        </>
    );
};

export default HomeContent;
