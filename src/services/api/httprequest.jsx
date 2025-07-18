import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000', // Backend API URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include token
axiosInstance.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem('user')); // Retrieve user data from localStorage
    if (user && user.token) {
      config.headers.Authorization = `Bearer ${user.token}`; // Attach token to headers
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
