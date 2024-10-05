// App.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from '../src/assets/logo.png';
import { LoginPage } from './components/pages/LoginPage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function HomePage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [customers, setCustomers] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showSecondProduct, setShowSecondProduct] = useState(false);
    const [newCustomer, setNewCustomer] = useState({
        isim: '',
        soyisim: '',
        email: '',
        telefon_numarasi: '',
        urun_adi: '',
        urun_markasi: '',
        urun_ebadi: '',
        urun_tipi: 'Yazlık',
        adet: 1,
        depo_bilgisi: '',
        firma_adi: '',
        not_field: '',
        arac_plakasi: '',
        ikinci_urun_adi: '',
        ikinci_urun_markasi: '',
        ikinci_urun_ebadi: '',
        ikinci_urun_adet: 1
    });

    const [sortConfig, setSortConfig] = useState({ key: 'id', direction: 'ascending' });
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        axios.get('http://localhost:8000/api/kayitlar/')
            .then(response => {
                setCustomers(response.data);
            })
            .catch(error => {
                console.error("Müşteri verileri çekilirken bir hata oluştu:", error);
            });
    }, []);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const fieldValue = type === 'checkbox' ? checked : value;
        setNewCustomer({ ...newCustomer, [name]: fieldValue });
    };

    const handleAddCustomer = () => {
        if (!validateForm()) {
            return;
        }

        axios.post('http://localhost:8000/api/kayitlar/', newCustomer)
            .then(response => {
                setCustomers([...customers, response.data]);
                setIsModalOpen(false);
                setNewCustomer({
                    isim: '',
                    soyisim: '',
                    email: '',
                    telefon_numarasi: '',
                    urun_adi: '',
                    urun_markasi: '',
                    urun_ebadi: '',
                    urun_tipi: 'Yazlık',
                    adet: 1,
                    depo_bilgisi: '',
                    firma_adi: '',
                    not_field: '',
                    arac_plakasi: '',
                    ikinci_urun_adi: '',
                    ikinci_urun_markasi: '',
                    ikinci_urun_ebadi: '',
                    ikinci_urun_adet: 1
                });
                setShowSecondProduct(false);
            })
            .catch(error => {
                console.error("Müşteri eklenirken bir hata oluştu:", error.response.data);
                alert("Müşteri eklenirken bir hata oluştu: " + JSON.stringify(error.response.data));
            });
    };

    const validateForm = () => {
        if ((!newCustomer.isim || !newCustomer.soyisim) && !newCustomer.firma_adi) {
            alert("İsim ve soyisim ya da firma adı girilmelidir.");
            return false;
        }
        if (newCustomer.firma_adi && (newCustomer.isim || newCustomer.soyisim)) {
            alert("Firma adı girildiyse isim ve soyisim girilmemelidir.");
            return false;
        }
        if (!/^[0-9]{10}$/.test(newCustomer.telefon_numarasi)) {
            alert("Telefon numarası 10 rakamdan oluşmalıdır.");
            return false;
        }
        if (!/^[\w.-]+@[\w-]+\.(com|net|org|co|gov|edu)$/.test(newCustomer.email)) {
            alert("Geçerli bir email adresi giriniz.");
            return false;
        }
        return true;
    };

    const requestSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    const sortedCustomers = React.useMemo(() => {
        let sortableCustomers = [...customers];
        if (sortConfig !== null) {
            sortableCustomers.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableCustomers;
    }, [customers, sortConfig]);

    const filteredCustomers = sortedCustomers.filter(customer => {
        const fullName = `${customer.isim || ''} ${customer.soyisim || ''}`.toLowerCase();
        const firmaAdi = (customer.firma_adi || '').toLowerCase();
        const urunAdi = (customer.urun_adi || '').toLowerCase();
        const urunMarkasi = (customer.urun_markasi || '').toLowerCase();
        const aracPlakasi = (customer.arac_plakasi || '').toLowerCase();
        const searchWords = searchQuery.toLowerCase().split(' ');
        return searchWords.every(word =>
            fullName.includes(word) ||
            firmaAdi.includes(word) ||
            urunAdi.includes(word) ||
            urunMarkasi.includes(word) ||
            aracPlakasi.includes(word)
        );
    });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentCustomers = filteredCustomers.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className='min-h-screen w-full flex flex-col items-center bg-gradient-to-r from-blue-400 to-emerald-400'>
            {/* Navbar Bölümü */}
            <header className='w-full flex justify-between items-center text-black py-6 px-8 md:px-32 bg-white drop-shadow-md'>
                <Link to="/">
                    <img src={logo} alt="Logo" className='w-52 hover:scale-105 transition-all' />
                </Link>
                <ul className='hidden xl:flex items-center gap-12 font-semibold text-base'>
                    <li key="anasayfa" className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer'>
                        <Link to="/">Anasayfa</Link>
                    </li>
                    <li key="randevular" className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer'>
                        <Link to="/randevular">Randevular</Link>
                    </li>
                    <li key="islemler" className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer'>
                        <Link to="/islemler">İşlemler</Link>
                    </li>
                    <li key="profil" className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer'>
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
                        <li key="anasayfa-mobile" className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>
                            <Link to="/">Anasayfa</Link>
                        </li>
                        <li key="randevular-mobile" className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>
                            <Link to="/randevular">Randevular</Link>
                        </li>
                        <li key="islemler-mobile" className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>
                            <Link to="/islemler">İşlemler</Link>
                        </li>
                        <li key="profil-mobile" className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>
                            <Link to="/profil">Profil</Link>
                        </li>
                        <li key="login-mobile" className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>
                            <Link to="/login">Giriş Yap</Link>
                        </li>
                    </ul>
                )}
            </header>

            {/* Sayfa İçeriği */}
            <main className="p-8 w-full max-w-min mx-auto">
                <Routes>
                    <Route path="/" element={<HomeContent
                        customers={customers}
                        isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen}
                        newCustomer={newCustomer}
                        handleInputChange={handleInputChange}
                        handleAddCustomer={handleAddCustomer}
                        showSecondProduct={showSecondProduct}
                        setShowSecondProduct={setShowSecondProduct}
                        sortedCustomers={sortedCustomers}
                        sortConfig={sortConfig}
                        requestSort={requestSort}
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        currentCustomers={currentCustomers}
                        paginate={paginate}
                        currentPage={currentPage}
                        totalPages={totalPages}
                        itemsPerPage={itemsPerPage}
                    />} />
                    <Route path="/login" element={<LoginPage />} />
                    {/* Diğer route'larınızı buraya ekleyebilirsiniz */}
                </Routes>
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
}

// HomeContent Component (Anasayfa İçeriği)
function HomeContent({
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
}) {
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
                            <th className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-gray-700 uppercase tracking-wider cursor-pointer" onClick={() => requestSort('id')}>
                                ID {sortConfig.key === 'id' ? (sortConfig.direction === 'ascending' ? '🔼' : '🔽') : null}
                            </th>
                            <th className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-gray-700 uppercase tracking-wider cursor-pointer" onClick={() => requestSort('isim')}>
                                İsim {sortConfig.key === 'isim' ? (sortConfig.direction === 'ascending' ? '🔼' : '🔽') : null}
                            </th>
                            <th className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-gray-700 uppercase tracking-wider cursor-pointer" onClick={() => requestSort('soyisim')}>
                                Soyisim {sortConfig.key === 'soyisim' ? (sortConfig.direction === 'ascending' ? '🔼' : '🔽') : null}
                            </th>
                            <th className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-gray-700 uppercase tracking-wider cursor-pointer" onClick={() => requestSort('raf_numarasi')}>
                                Raf No {sortConfig.key === 'raf_numarasi' ? (sortConfig.direction === 'ascending' ? '🔼' : '🔽') : null}
                            </th>
                            <th className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-gray-700 uppercase tracking-wider cursor-pointer" onClick={() => requestSort('arac_plakasi')}>
                                Plaka {sortConfig.key === 'arac_plakasi' ? (sortConfig.direction === 'ascending' ? '🔼' : '🔽') : null}
                            </th>
                            <th className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-gray-700 uppercase tracking-wider cursor-pointer" onClick={() => requestSort('urun_ebadi')}>
                                Ürün Ebadı {sortConfig.key === 'urun_ebadi' ? (sortConfig.direction === 'ascending' ? '🔼' : '🔽') : null}
                            </th>
                            <th className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-gray-700 uppercase tracking-wider cursor-pointer" onClick={() => requestSort('urun_adi')}>
                                Ürün Adı {sortConfig.key === 'urun_adi' ? (sortConfig.direction === 'ascending' ? '🔼' : '🔽') : null}
                            </th>
                            <th className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-gray-700 uppercase tracking-wider cursor-pointer" onClick={() => requestSort('urun_markasi')}>
                                Ürün Markası {sortConfig.key === 'urun_markasi' ? (sortConfig.direction === 'ascending' ? '🔼' : '🔽') : null}
                            </th>
                            <th className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-gray-700 uppercase tracking-wider cursor-pointer" onClick={() => requestSort('durum')}>
                                Durum {sortConfig.key === 'durum' ? (sortConfig.direction === 'ascending' ? '🔼' : '🔽') : null}
                            </th>
                            <th className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-gray-700 uppercase tracking-wider cursor-pointer" onClick={() => requestSort('geri_sayim')}>
                                Geri Sayım {sortConfig.key === 'geri_sayim' ? (sortConfig.direction === 'ascending' ? '🔼' : '🔽') : null}
                            </th>
                            <th className="py-3 px-6 bg-gray-200 text-center text-xs font-medium text-gray-700 uppercase tracking-wider">İşlemler</th>
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
                                <td colSpan="11" className="py-4 px-6 text-center text-gray-500">Yükleniyor veya müşteri kaydı yok...</td>
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
}

// CustomerModal Component
function CustomerModal({
    isModalOpen,
    setIsModalOpen,
    newCustomer,
    handleInputChange,
    handleAddCustomer,
    showSecondProduct,
    setShowSecondProduct
}) {
    if (!isModalOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" onClick={() => setIsModalOpen(false)}>
            <div className="bg-white p-8 rounded-lg w-full max-w-lg" onClick={(e) => e.stopPropagation()}>
                <h2 className="text-2xl font-bold mb-4">Yeni Müşteri Ekle</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        name="isim"
                        value={newCustomer.isim}
                        onChange={handleInputChange}
                        placeholder="İsim"
                        className="p-2 border rounded"
                    />
                    <input
                        type="text"
                        name="soyisim"
                        value={newCustomer.soyisim}
                        onChange={handleInputChange}
                        placeholder="Soyisim"
                        className="p-2 border rounded"
                    />
                    <input
                        type="text"
                        name="firma_adi"
                        value={newCustomer.firma_adi}
                        onChange={handleInputChange}
                        placeholder="Firma Adı (Opsiyonel)"
                        className="p-2 border rounded"
                    />
                    <input
                        type="email"
                        name="email"
                        value={newCustomer.email}
                        onChange={handleInputChange}
                        placeholder="Email Adresi"
                        className="p-2 border rounded md:col-span-2"
                    />
                    <input
                        type="text"
                        name="telefon_numarasi"
                        value={newCustomer.telefon_numarasi}
                        onChange={handleInputChange}
                        placeholder="Telefon Numarası (10 Rakam)"
                        maxLength="10"
                        className="p-2 border rounded md:col-span-2"
                    />
                    <input
                        type="text"
                        name="arac_plakasi"
                        value={newCustomer.arac_plakasi}
                        onChange={handleInputChange}
                        placeholder="Araç Plakası"
                        className="p-2 border rounded"
                    />
                    <input
                        type="text"
                        name="urun_adi"
                        value={newCustomer.urun_adi}
                        onChange={handleInputChange}
                        placeholder="Ürün Adı"
                        className="p-2 border rounded"
                    />
                    <input
                        type="text"
                        name="urun_markasi"
                        value={newCustomer.urun_markasi}
                        onChange={handleInputChange}
                        placeholder="Ürün Markası"
                        className="p-2 border rounded"
                    />
                    <input
                        type="text"
                        name="urun_ebadi"
                        value={newCustomer.urun_ebadi}
                        onChange={handleInputChange}
                        placeholder="Ürün Ebadı"
                        className="p-2 border rounded"
                    />
                    <select
                        name="urun_tipi"
                        value={newCustomer.urun_tipi}
                        onChange={handleInputChange}
                        className="p-2 border rounded"
                    >
                        <option value="Yazlık">Yazlık</option>
                        <option value="Kışlık">Kışlık</option>
                        <option value="Dört Mevsim">Dört Mevsim</option>
                    </select>
                    <input
                        type="number"
                        name="adet"
                        value={newCustomer.adet}
                        onChange={handleInputChange}
                        placeholder="Adet"
                        className="p-2 border rounded"
                        min="1"
                    />
                    <input
                        type="text"
                        name="depo_bilgisi"
                        value={newCustomer.depo_bilgisi}
                        onChange={handleInputChange}
                        placeholder="Depo Bilgisi"
                        className="p-2 border rounded md:col-span-2"
                    />
                    <textarea
                        name="not_field"
                        value={newCustomer.not_field}
                        onChange={handleInputChange}
                        placeholder="Not"
                        className="p-2 border rounded md:col-span-2"
                    ></textarea>
                    <label className="flex items-center md:col-span-2">
                        <input
                            type="checkbox"
                            name="showSecondProduct"
                            checked={showSecondProduct}
                            onChange={() => setShowSecondProduct(!showSecondProduct)}
                            className="mr-2"
                        />
                        2. Ürün Ekle
                    </label>
                    {showSecondProduct && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 transition-all md:col-span-2">
                            <input
                                type="text"
                                name="ikinci_urun_adi"
                                value={newCustomer.ikinci_urun_adi}
                                onChange={handleInputChange}
                                placeholder="2. Ürün Adı"
                                className="p-2 border rounded"
                            />
                            <input
                                type="text"
                                name="ikinci_urun_markasi"
                                value={newCustomer.ikinci_urun_markasi}
                                onChange={handleInputChange}
                                placeholder="2. Ürün Markası"
                                className="p-2 border rounded"
                            />
                            <input
                                type="text"
                                name="ikinci_urun_ebadi"
                                value={newCustomer.ikinci_urun_ebadi}
                                onChange={handleInputChange}
                                placeholder="2. Ürün Ebadı"
                                className="p-2 border rounded"
                            />
                            <input
                                type="number"
                                name="ikinci_urun_adet"
                                value={newCustomer.ikinci_urun_adet}
                                onChange={handleInputChange}
                                placeholder="2. Ürün Adet"
                                className="p-2 border rounded"
                                min="1"
                            />
                        </div>
                    )}
                </div>
                <div className="flex justify-end gap-4 mt-6">
                    <button
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => setIsModalOpen(false)}
                    >
                        İptal
                    </button>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleAddCustomer}
                    >
                        Kaydet
                    </button>
                </div>
            </div>
        </div>
    );
}

function App() {
    return (
        <Router>
            <HomePage />
        </Router>
    );
}

export default App;
