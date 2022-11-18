import { createSlice } from '@reduxjs/toolkit';
import noticesOperations from './noticesOperations';

const initialState = {
  notices: [],
  noticeAdded: false,
  noticeRemoved: false,
  error: null,
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  extraReducers: {
    [noticesOperations.addNotice.pending](state, _) {
      state.noticeAdded = false;
      state.error = null;
    },
    [noticesOperations.addNotice.fulfilled](state, action) {
      state.notices = [...state.notices, action.payload];
      state.noticeAdded = true;
      state.error = null;
    },
    [noticesOperations.addNotice.rejected](state, action) {
      state.error = action.payload;
      state.noticeAdded = false;
    },
  },
});

export default noticesSlice.reducer;
