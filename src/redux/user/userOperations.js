import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// export const userPosts = createAsyncThunk(
//   'user/userPosts',
//   async (_, { rejectWithValue }) => {
//     try {
//       // const { data } = await axios.get('/animals');
//       // console.log(data);
//       // return data;
//     } catch (error) {
//       console.log(error);
//       return rejectWithValue(error);
//     }
//   }
// );

export const createUserPost = createAsyncThunk(
  'user/createUserPost',
  async (post, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/user/animal', post);
      // console.log(data);
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
      await axios.delete(`/user/animal/${id}`);
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
      const { data } = await axios.patch(`/user/${id}`, value);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// const getAvatarUser = createAsyncThunk(
//   'auth/getAvatarUser',
//   async (credentials, { rejectWithValue }) => {
//     try {
//       // const { data } = await axios.patch('/auth/user/avatars', credentials);
//       // return data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

const operations = {
  // userPosts,
  createUserPost,
  deleteUserPost,
  updateUserInformation,
  // getAvatarUser,
};
export default operations;
