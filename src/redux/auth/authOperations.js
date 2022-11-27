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

const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
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
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);

    try {
      const { data } = await axios.get(`/user/current`, persistedToken);
      return data;
    } catch (error) {
      console.log(error);
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
