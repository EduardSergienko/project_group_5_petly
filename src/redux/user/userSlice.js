import { createSlice } from '@reduxjs/toolkit';
import authOperations from './userOperations';

const initialState = {
  userPosts: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [authOperations.userPosts.fulfilled](state, { payload }) {
      state.userPosts = payload;
    },
    [authOperations.createUserPost.fulfilled](state, { payload }) {
      state.userPosts = [...state.userPosts, payload];
    },
    [authOperations.deleteUserPost.fulfilled]: (state, { payload }) => {
      state.userPosts = state.userPosts.filter(({ _id }) => _id !== payload);
    },
  },
});

export default userSlice.reducer;
