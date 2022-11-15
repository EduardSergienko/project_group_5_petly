import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL =
//   'https://63722089025414c63706eb42.mockapi.io/api/user/';

export const userPosts = createAsyncThunk(
  'user/userPosts',
  async (_, { rejectWithValue }) => {
    try {
      // const { data } = await axios.get('/notices/user/own');
      // return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const createUserPost = createAsyncThunk(
  'user/createUserPost',
  async (post, { rejectWithValue }) => {
    // const post = {
    //   birthDay,
    //   breed,
    //   comments,
    //   name,
    //   photo,
    // };
    try {
      const { data } = await axios.post('/animals', post);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteUserPost = createAsyncThunk(
  'user/deleteUserPost',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/animals/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const operations = {
  userPosts,
  createUserPost,
  deleteUserPost,
};
export default operations;
