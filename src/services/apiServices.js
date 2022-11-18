import axios from 'axios';
axios.defaults.baseURL = 'https://fetch-friend.herokuapp.com/api';

const getAllFriends = async () => {
  return await axios.get('/friends');
};

const getNews = async () => {
  return await axios.get('/news');
};

const apiServices = {
  getAllFriends,
  getNews,
};
export default apiServices;
