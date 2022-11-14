import { createSlice } from '@reduxjs/toolkit';
import authOperations from './userOperations';

const initialState = {
  userPosts: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [authOperations.userOwnPosts.fulfilled](state, { payload }) {
      state.userPosts = payload;
    },
    [authOperations.createUserOwnPost.fulfilled](state, { payload }) {
      state.userPosts = [...state.userPosts, payload];
    },
    [authOperations.deleteUserOwnPost.fulfilled]: (state, { payload }) => {
      state.userPosts = state.userPosts.filter(({ id }) => id !== payload);
    },
  },
});

export default userSlice.reducer;
