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
    const { auth } = getState();

    if (!auth.token) {
      return [];
    }

    token.set(auth.token);
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
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const addToFavorite = createAsyncThunk(
  'notices/addToFavorite',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(`/notices/${credentials}/favorite`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const removeFavorite = createAsyncThunk(
  'notices/removeFavorite',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/notices/${credentials}/favorite`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const getFavorite = createAsyncThunk(
  'notices/getFavorite',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/notices/user/favorite`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const getOwn = createAsyncThunk(
  'notices/getOwn',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/notices/user/own`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const operations = {
  addNotice,
  getNotices,
  addToFavorite,
  getFavorite,
  removeFavorite,
  getOwn,
};

export default operations;