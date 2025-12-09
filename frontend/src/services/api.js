import axios from 'axios';

// Create axios instance with base URL
const api = axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add request interceptor to attach auth token
api.interceptors.request.use(
    (config) => {
        const authState = localStorage.getItem('authState');
        if (authState) {
            const { userToken } = JSON.parse(authState);
            if (userToken) {
                config.headers.Authorization = `Bearer ${userToken}`;
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
