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

// const register = createAsyncThunk(
//   'auth/register',
//   async (credentials, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.post('/register', credentials);
//       token.set(data.token);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// const logIn = createAsyncThunk(
//   'auth/login',
//   async (credentials, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.post('/login', credentials);
//       token.set(data.token);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// const logOutUser = createAsyncThunk(
//   'user/logOutUser',
//   async (_, { rejectWithValue }) => {
//     try {
//       await axios.post('/logout');
//       token.unset();
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

const operations = {
    getNotices
//   register,
//   logIn,
//   logOutUser,
};
export default operations;
