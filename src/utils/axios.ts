/**
 * axios setup to use mock service
 */

import axios from 'axios';

const axiosServices = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// interceptor for http
axiosServices.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject((error.response && error.response.data) || 'Wrong Services'),
);

export default axiosServices;
