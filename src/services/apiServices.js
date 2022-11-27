import axios from 'axios';
axios.defaults.baseURL = 'https://fetch-friends.onrender.com/api';

const getAllFriends = async () => {
  return await axios.get('/friends');
};

const getNews = async page => {
  return await axios.get(`/news?page=${page}`);
};
const searchNews = async query => {
  return await axios.get(`/news/search?title=${query}`);
};
const apiServices = {
  getAllFriends,
  getNews,
  searchNews,
};
export default apiServices;
