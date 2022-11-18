import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3001/api';

export default async function getAllFriends() {
  return await axios.get('/friends');
}
