import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:3001//api';

export const userOwnPosts = createAsyncThunk(
  'contact/fechContact',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/notices/user/own');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const operations = {
  userOwnPosts,
};
export default operations;
