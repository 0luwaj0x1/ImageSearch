import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 6e9aa4f13ef56ee5fb29e8adfe0f5afd83ce099650439835fac51eb90413fc80'
  }
});