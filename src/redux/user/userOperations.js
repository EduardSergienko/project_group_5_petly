import { axiosInstance } from '../../services/axios-instance';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const createUserPost = createAsyncThunk(
  'user/createUserPost',
  async (post, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post('/user/animal', post);
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
      await axiosInstance.delete(`/user/animal/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const updateUserInformation = createAsyncThunk(
  'auth/updateUserInformation',
  async ({ data }, { rejectWithValue }) => {
    const { id, value } = data;
    try {
      const { data } = await axiosInstance.patch(`/user/${id}`, value);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const operations = {
  createUserPost,
  deleteUserPost,
  updateUserInformation,
};
export default operations;
