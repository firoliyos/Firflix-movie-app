import axios from 'axios';

// Base URL to make requests to the TMDb API
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export default instance;