import axios from "axios";

const Ax = axios.create({
    baseURL: 'http://localhost:5000/api', //add base url
    // timeout: 5000
})

Ax.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');//enter token key
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;

    },
    (error) => {
        return Promise.reject(error);
    }
)

Ax.interceptors.response.use((response) => {
    return response
},
    (error) => {
        const { response } = error;
        console.log('Unauthorized! Redirecting to login...', response);
        window.location.href = '/login';
        return Promise.reject(error);
    }
)

export default Ax