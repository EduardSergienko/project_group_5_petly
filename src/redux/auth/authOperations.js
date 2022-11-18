import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'http://localhost:3001/api'; // 3000
axios.defaults.baseURL = 'http://fetch-friend.herokuapp.com/api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    // console.log('in redux', credentials);
    try {
      const { data } = await axios.post('/auth/register', credentials);
      token.set(data.result.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/login', credentials);
      token.set(data.result.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const logOutUser = createAsyncThunk(
  'user/logOutUser',
  async (_, { rejectWithValue }) => {
    try {
      await axios.get('/auth/logout');
      token.unset();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (token, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/user/current`, token);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const operations = {
  register,
  logIn,
  logOutUser,
  getCurrentUser,
};
export default operations;
