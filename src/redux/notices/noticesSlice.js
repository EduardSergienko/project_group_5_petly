import { createSlice } from '@reduxjs/toolkit';
import noticesOperations from './noticesOperations';
// import notices from 'helpers/Notification/Notification';

const initialState = {
  notices: [],
  noticeAdded: false,
  noticeRemoved: false,
  error: false,
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  extraReducers: {
    [noticesOperations.addNotice.pending](state, _) {},
    [noticesOperations.addNotice.fulfilled](state, action) {
      state.notices = [...state.notices, action.payload];
      state.noticeAdded = true;
    },
    [noticesOperations.addNotice.rejected](state, action) {
      state.error = action.payload;
      state.noticeAdded = false;
    },
  },
});

export default noticesSlice.reducer;
