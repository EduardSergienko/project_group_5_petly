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
      state.userPosts = [...payload];
    },
  },
});

export default userSlice.reducer;
