import axios from 'axios';
// import Config from 'react-native-config';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/v1/acompanhantes',
  // baseURL: Config.API_HOST,
});

export default api;
