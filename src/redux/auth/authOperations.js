import { createAsyncThunk } from '@reduxjs/toolkit';
import isTokenExpired from '../../services/jwt';
import { axiosInstance } from '../../services/axios-instance';

const token = {
  set(token) {
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axiosInstance.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post('/auth/register', credentials);
      token.set(data.token);

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
      const { data } = await axiosInstance.post('/auth/login', credentials);
      token.set(data.token);

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
      await axiosInstance.get('/auth/logout');
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
      const { data } = await axiosInstance.get(`/user/current`);

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

let refreshTokenRequest = null;

const getAccessToken = createAsyncThunk(
  'auth/getAccessToken',
  async (_, thunkAPI) => {
    try {
      const accessToken = thunkAPI.getState().auth.token;

      if (!accessToken || isTokenExpired(accessToken)) {
        if (refreshTokenRequest === null) {
          refreshTokenRequest = axiosInstance.get(`/auth/refresh`);
        }

        const { data } = await refreshTokenRequest;
        refreshTokenRequest = null;

        return data.accessToken;
      }

      return accessToken;
    } catch (error) {
      return null;
    }
  }
);

const operations = {
  register,
  logIn,
  logOutUser,
  getCurrentUser,
  getAccessToken,
};
export default operations;
