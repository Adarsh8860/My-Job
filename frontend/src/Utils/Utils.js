import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://localhost:1234/api/v1',     // use http unless you have a cert for https
});

export default axiosClient;
