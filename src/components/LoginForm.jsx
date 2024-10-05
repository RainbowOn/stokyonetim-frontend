import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Link bileşenini import edin

function LoginForm() {
  return (
    <div>
      <h2>Login Formu</h2>
    </div>
  );
}

export default LoginForm;


// return (
//     <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
//       {/* ... (logo ve başlık) ... */}

//       <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* ... (email ve şifre inputları) ... */}

//           <div>
//             <button
//               type="submit"
//               className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//             >
//               Giriş Yap
//             </button>
//           </div>
//         </form>

//         {/* Sosyal medya ile giriş */}
//         <div className="mt-6">
//           {/* ... (ayırıcı çizgi) ... */}

//           <div className="mt-6 grid grid-cols-2 gap-3">
//             {/* ... (sosyal medya butonları) ... */}
//           </div>
//         </div>

//         {/* Kayıt olma linki */}
//         <p className="mt-10 text-center text-sm text-gray-500">
//           Hesabınız yok mu?{' '}
//           <Link to="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
//             Kaydolun
//           </Link>
//         </p> 
//       </div>
//     </div>
//   );
// }

