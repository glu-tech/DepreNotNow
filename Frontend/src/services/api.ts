import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.109:5000/api/core/'
});

export default api;