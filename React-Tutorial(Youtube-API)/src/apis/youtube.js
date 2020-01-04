import axios from 'axios';

const KEY = 'AIzaSyBywUa39zRCgkWP0BSYdkFJEjK6rxCFUW0';

export const baseParams = {
    part: 'snippet',
    maxResults: 20,
    key: KEY
};
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
  

});