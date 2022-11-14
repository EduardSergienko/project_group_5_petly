import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL =
  'https://63722089025414c63706eb42.mockapi.io/api/user/';

export const userOwnPosts = createAsyncThunk(
  'user/userOwnPosts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/userOwnPosts');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const createUserOwnPost = createAsyncThunk(
  'user/createUserOwnPost',
  async ({ birthday, breed, comments, name }, { rejectWithValue }) => {
    const post = {
      birthday,
      breed,
      comments,
      name,
      // photo,
    };
    try {
      const { data } = await axios.post('/userOwnPosts', post);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteUserOwnPost = createAsyncThunk(
  'user/deleteUserOwnPost',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/userOwnPosts/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const operations = {
  userOwnPosts,
  createUserOwnPost,
  deleteUserOwnPost,
};
export default operations;
