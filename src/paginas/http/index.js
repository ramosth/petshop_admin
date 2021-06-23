import axios from "axios";

const http = axios.create({
  baseURL: 'http://localhost:8000/'
})

http.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    //antes de cada requisição, quero ver se tem token, e se tiver token, coloca no header
    if(token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
)

export default http;