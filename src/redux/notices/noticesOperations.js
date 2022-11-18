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

const operations = {
  addNotice,
};

export default operations;
