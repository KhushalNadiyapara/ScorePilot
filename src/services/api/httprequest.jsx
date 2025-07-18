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
    const user = JSON.parse(localStorage.getItem('user')); 
    if (user && user.token) {
      config.headers.Authorization = `Bearer ${user.token}`; 
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response, 
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error('Unauthorized access - redirecting home');
      window.location.href = '/';
    }
    return Promise.reject(error);
  });
export default axiosInstance;
