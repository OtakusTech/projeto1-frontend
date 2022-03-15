import axios from 'axios';
import { getToken } from '../auth';

const api = axios.create({
  baseURL: 'http://otakustech-api.herokuapp.com:5000', // change here, in the future
});

api.interceptors.request.use(async (config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
