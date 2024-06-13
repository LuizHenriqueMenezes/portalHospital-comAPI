import axios from 'axios';

const api = axios.create({
  baseURL: 'https://digimon-api.vercel.app/api/digimon/name'
});

export default api;