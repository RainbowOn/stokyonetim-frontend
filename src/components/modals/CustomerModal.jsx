// // src/components/pages/CustomerModal.jsx
// import React from 'react';

// const CustomerModal = ({
//     isModalOpen,
//     setIsModalOpen,
//     newCustomer,
//     handleInputChange,
//     handleAddCustomer,
//     showSecondProduct,
//     setShowSecondProduct
// }) => {
//     if (!isModalOpen) return null;

//     return (
//         <div
//             className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
//             onClick={() => setIsModalOpen(false)}
//         >
//             <div
//                 className="bg-white p-8 rounded-lg w-full max-w-lg"
//                 onClick={(e) => e.stopPropagation()}
//             >
//                 <h2 className="text-2xl font-bold mb-4">Yeni Müşteri Ekle</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <input
//                         type="text"
//                         name="isim"
//                         value={newCustomer.isim}
//                         onChange={handleInputChange}
//                         placeholder="İsim"
//                         className="p-2 border rounded"
//                     />
//                     <input
//                         type="text"
//                         name="soyisim"
//                         value={newCustomer.soyisim}
//                         onChange={handleInputChange}
//                         placeholder="Soyisim"
//                         className="p-2 border rounded"
//                     />
//                     <input
//                         type="text"
//                         name="firma_adi"
//                         value={newCustomer.firma_adi}
//                         onChange={handleInputChange}
//                         placeholder="Firma Adı (Opsiyonel)"
//                         className="p-2 border rounded"
//                     />
//                     <input
//                         type="email"
//                         name="email"
//                         value={newCustomer.email}
//                         onChange={handleInputChange}
//                         placeholder="Email Adresi"
//                         className="p-2 border rounded md:col-span-2"
//                     />
//                     <input
//                         type="text"
//                         name="telefon_numarasi"
//                         value={newCustomer.telefon_numarasi}
//                         onChange={handleInputChange}
//                         placeholder="Telefon Numarası (10 Rakam)"
//                         maxLength="10"
//                         className="p-2 border rounded md:col-span-2"
//                     />
//                     <input
//                         type="text"
//                         name="arac_plakasi"
//                         value={newCustomer.arac_plakasi}
//                         onChange={handleInputChange}
//                         placeholder="Araç Plakası"
//                         className="p-2 border rounded"
//                     />
//                     <input
//                         type="text"
//                         name="urun_adi"
//                         value={newCustomer.urun_adi}
//                         onChange={handleInputChange}
//                         placeholder="Ürün Adı"
//                         className="p-2 border rounded"
//                     />
//                     <input
//                         type="text"
//                         name="urun_markasi"
//                         value={newCustomer.urun_markasi}
//                         onChange={handleInputChange}
//                         placeholder="Ürün Markası"
//                         className="p-2 border rounded"
//                     />
//                     <input
//                         type="text"
//                         name="urun_ebadi"
//                         value={newCustomer.urun_ebadi}
//                         onChange={handleInputChange}
//                         placeholder="Ürün Ebadı"
//                         className="p-2 border rounded"
//                     />
//                     <select
//                         name="urun_tipi"
//                         value={newCustomer.urun_tipi}
//                         onChange={handleInputChange}
//                         className="p-2 border rounded"
//                     >
//                         <option value="Yazlık">Yazlık</option>
//                         <option value="Kışlık">Kışlık</option>
//                         <option value="Dört Mevsim">Dört Mevsim</option>
//                     </select>
//                     <input
//                         type="number"
//                         name="adet"
//                         value={newCustomer.adet}
//                         onChange={handleInputChange}
//                         placeholder="Adet"
//                         className="p-2 border rounded"
//                         min="1"
//                     />
//                     <input
//                         type="text"
//                         name="depo_bilgisi"
//                         value={newCustomer.depo_bilgisi}
//                         onChange={handleInputChange}
//                         placeholder="Depo Bilgisi"
//                         className="p-2 border rounded md:col-span-2"
//                     />
//                     <textarea
//                         name="not_field"
//                         value={newCustomer.not_field}
//                         onChange={handleInputChange}
//                         placeholder="Not"
//                         className="p-2 border rounded md:col-span-2"
//                     ></textarea>
//                     <label className="flex items-center md:col-span-2">
//                         <input
//                             type="checkbox"
//                             name="showSecondProduct"
//                             checked={showSecondProduct}
//                             onChange={() => setShowSecondProduct(!showSecondProduct)}
//                             className="mr-2"
//                         />
//                         2. Ürün Ekle
//                     </label>
//                     {showSecondProduct && (
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 transition-all md:col-span-2">
//                             <input
//                                 type="text"
//                                 name="ikinci_urun_adi"
//                                 value={newCustomer.ikinci_urun_adi}
//                                 onChange={handleInputChange}
//                                 placeholder="2. Ürün Adı"
//                                 className="p-2 border rounded"
//                             />
//                             <input
//                                 type="text"
//                                 name="ikinci_urun_markasi"
//                                 value={newCustomer.ikinci_urun_markasi}
//                                 onChange={handleInputChange}
//                                 placeholder="2. Ürün Markası"
//                                 className="p-2 border rounded"
//                             />
//                             <input
//                                 type="text"
//                                 name="ikinci_urun_ebadi"
//                                 value={newCustomer.ikinci_urun_ebadi}
//                                 onChange={handleInputChange}
//                                 placeholder="2. Ürün Ebadı"
//                                 className="p-2 border rounded"
//                             />
//                             <input
//                                 type="number"
//                                 name="ikinci_urun_adet"
//                                 value={newCustomer.ikinci_urun_adet}
//                                 onChange={handleInputChange}
//                                 placeholder="2. Ürün Adet"
//                                 className="p-2 border rounded"
//                                 min="1"
//                             />
//                         </div>
//                     )}
//                 </div>
//                 <div className="flex justify-end gap-4 mt-6">
//                     <button
//                         className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
//                         onClick={() => setIsModalOpen(false)}
//                     >
//                         İptal
//                     </button>
//                     <button
//                         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                         onClick={handleAddCustomer}
//                     >
//                         Kaydet
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CustomerModal;
