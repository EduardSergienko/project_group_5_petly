import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://fetch-friend.herokuapp.com/api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const addNotice = createAsyncThunk(
  'notices/addNotice',
  async (credentials, { rejectWithValue, getState }) => {
    const { user } = getState();

    if (!user.token) {
      return [];
    }

    token.set(user.token);
    try {
      const { data } = await axios.post('/notices/', credentials);

      return data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const getNotices = createAsyncThunk(
  'notices/get',
  async (category, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/notices/category/${category}`);
      console.log(data)
    //   token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const operations = {
  addNotice,
  getNotices,
};

export default operations;
