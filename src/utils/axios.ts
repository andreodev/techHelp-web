import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/techelp/api', 
  timeout: 5000, 
  headers: {
    'Content-Type': 'application/json',
  },
});


axiosInstance.interceptors.response.use(
  response => response, 
  error => {
    if (error.response) {
      console.error('Erro no servidor:', error.response.status);
    } else if (error.request) {
      console.error('Sem resposta do servidor:', error.request);
    } else {
      console.error('Erro na configuração do Axios:', error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
