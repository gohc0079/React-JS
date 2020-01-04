import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ab0e4549d6ecd55dca1dfb5406142f74b5ce5372349b0ee1e993354327e56f99'
    }
});