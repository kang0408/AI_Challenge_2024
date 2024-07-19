import axios from 'axios';

const apiInst = axios.create({
  baseURL: `${import.meta.env.API_BASE_URL}`,
  headers: {
    'Content-Type': 'application/json'
  }
});

apiInst.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('hit:access-token');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

apiInst.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status == 401) {
      console.log('chuyen ve trang login');
    }
    return Promise.reject(error);
  }
);

export const api = apiInst;
