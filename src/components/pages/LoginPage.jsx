// components/pages/LoginPage.jsx
import React from 'react';

export const LoginPage = () => {
  return (
    <>
      {/*
        Bu örnek, şablonunuzu güncellemeyi gerektirir:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Hesabınıza Giriş Yapın
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email Adresi
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Şifre
                </label>
                <div className="text-sm">
                  <button
                    type="button"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                    onClick={() => {
                      // Şifre sıfırlama işlemini burada ele alın
                      console.log('Şifre sıfırlama butonuna tıklandı');
                    }}
                  >
                    Şifremi Unuttum?
                  </button>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Giriş Yap
              </button>
            </div>
          </form>

          {/* Sosyal Medya Giriş Butonları */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">Veya devam edin</span>
              </div>
            </div>

            <div className="mt-6 flex gap-4">
              {/* Google Giriş Butonu */}
              <button
                type="button"
                className="flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                onClick={() => {
                  // Google ile giriş yapma işlemini burada ele alın
                  console.log('Google ile giriş yapıldı');
                }}
              >
                <svg
                  className="mr-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#FFC107"
                    d="M43.6 20.2H42V20H24v8h11.3c-1.7 4.6-6.4 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.4-5.4C34.9 6.1 29.4 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.5-.3-3.7z"
                  />
                  <path
                    fill="#FF3D00"
                    d="M6.3 14.7l6.2 4.6C14.2 15.2 18.5 12 24 12c3.1 0 5.9 1.1 8.1 2.9l5.9-5.9C34.8 5.1 29.4 3 24 3 12.9 3 4 11.9 4 24s8.9 21 20 21c10.5 0 18.3-8 18.3-18h-20.3v-6.7z"
                  />
                  <path
                    fill="#4CAF50"
                    d="M24 44c5.4 0 10.1-1.8 13.8-5l-6.2-4.6c-2.2 1.5-5 2.4-7.6 2.4-5.5 0-10.8-3.2-13.3-7.8l-6.3 4.9C8.9 39.3 16.3 44 24 44z"
                  />
                  <path
                    fill="#1976D2"
                    d="M43.6 20.2H42V20H24v8h11.3c-0.3 1.1-0.5 2.3-0.5 3.7 0 10.5-8.1 19-18.3 19-9.6 0-17.6-7.5-18.7-17h20.3c1 5.7 5.9 10 11.7 10 6.1 0 11-4.9 11-11 0-1.2-0.1-2.4-0.3-3.6z"
                  />
                </svg>
                Google
              </button>

              {/* Facebook Giriş Butonu */}
              <button
                type="button"
                className="flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                onClick={() => {
                  // Facebook ile giriş yapma işlemini burada ele alın
                  console.log('Facebook ile giriş yapıldı');
                }}
              >
                <svg
                  className="mr-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#1877F2"
                    d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.991 4.388 10.954 10.125 11.854v-8.385H7.078V12h3.047V9.797c0-3.017 1.793-4.691 4.533-4.691 1.312 0 2.686.235 2.686.235v2.953H15.62c-1.492 0-1.955.927-1.955 1.874V12h3.328l-.532 3.469H13.665v8.385C19.612 22.954 24 17.991 24 12z"
                  />
                </svg>
                Facebook
              </button>
            </div>
          </div>

          {/* "Start a 14 day free trial" bağlantısını kaldırdık */}
          {/* <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Start a 14 day free trial
            </a>
          </p> */}
        </div>
      </div>
    </>
  );
};
