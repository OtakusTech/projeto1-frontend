import axios from 'axios';

const apiImage = axios.create({
    baseURL: 'https://api.imgur.com/3', 
});
const clientId = '2ec35053f9b270a';

apiImage.interceptors.request.use(async (config) => {
    config.headers.Authorization = `Client-ID ${clientId}`;
    return config;
});

export default apiImage;