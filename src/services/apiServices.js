import { axiosInstance } from './axios-instance';

const getAllFriends = async () => {
  return await axiosInstance.get('/friends');
};

const getNews = async page => {
  return await axiosInstance.get(`/news?page=${page}`);
};
const searchNews = async query => {
  return await axiosInstance.get(`/news/search?title=${query}`);
};
const apiServices = {
  getAllFriends,
  getNews,
  searchNews,
};
export default apiServices;
