import axios from 'axios';

const instance = axios.create({
  // baseURL: 'https://tattooart-e7c517f95819.herokuapp.com',
  baseURL: process.env.REACT_APP_API_URL,
});

// instance.interceptors.request.use(config => {
//   config.headers.Authorization = window.localStorage.getItem('token');
//   return config;
// });

export default instance;
