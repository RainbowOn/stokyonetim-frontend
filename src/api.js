// src/api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api/', // Django backend URL'iniz
});

// Token varsa Authorization header'a ekle
const token = localStorage.getItem('authToken');
if (token) {
    api.defaults.headers.common['Authorization'] = `Token ${token}`;
}

// Request interceptor ile token'ı dinamik olarak ekle
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('authToken');
        if (token) {
            config.headers['Authorization'] = `Token ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
