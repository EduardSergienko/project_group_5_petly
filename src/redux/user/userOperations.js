import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const userPosts = createAsyncThunk(
  'user/userPosts',
  async (_, { rejectWithValue }) => {
    try {
      // const { data } = await axios.get('/animals');
      // console.log(data);
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
