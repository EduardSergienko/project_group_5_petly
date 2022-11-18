import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


axios.defaults.baseURL = 'http://localhost:3001/api/notices';

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

const getNotices = createAsyncThunk(
  'notices/get',
  async (category, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/category/${category}`);
    //   token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


const operations = {
    getNotices
};
export default operations;
