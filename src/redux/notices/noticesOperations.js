import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://fetch-friends.onrender.com/api';

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
      await axios.patch(`/notices/${credentials}/favorite`);
      const { data } = await axios.get(`/notices/user/favorite`);
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
      await axios.delete(`/notices/${credentials}/favorite`);
      const { data } = await axios.get(`/notices/user/favorite`);
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

const getOneNotice = createAsyncThunk(
  'notices/getOneNoties',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/notices/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const deleteUserNotice = createAsyncThunk(
  'notices/deleteUserNotice',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/notices/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const searchNotice = createAsyncThunk(
  'notices/searchNotice',
  async ({ category, title }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `/notices/category/search?category=${category}&title=${title}`
      );

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
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
  getOneNotice,
  deleteUserNotice,
  searchNotice,
};

export default operations;
