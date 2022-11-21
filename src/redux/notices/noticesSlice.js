import { createSlice } from '@reduxjs/toolkit';
import noticesOperations from './noticesOperations';

const initialState = {
  notices: [],
  myFavorite: [],
  noticeAdded: '',
  noticeRemoved: '',
  noticeAddError: '',
  error: null,
  noticeInformationMore: null,
  loading: false,
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  extraReducers: {
    [noticesOperations.addNotice.pending](state, _) {
      state.error = null;
      state.noticeAdded = false;
      state.noticeAddError = null;
    },
    [noticesOperations.addNotice.fulfilled](state, action) {
      state.notices = [action.payload, ...state.notices];
      state.noticeAdded = true;
      state.error = null;
    },
    [noticesOperations.addNotice.rejected](state, action) {
      state.noticeAdded = false;
      state.noticeAddError = action.payload;
    },
    [noticesOperations.getNotices.pending](state, _) {
      state.error = null;
    },
    [noticesOperations.getNotices.fulfilled](state, action) {
      state.notices = action.payload.data;
    },
    [noticesOperations.getNotices.rejected](state, action) {
      state.error = action.payload;
    },
    [noticesOperations.addToFavorite.fulfilled](state, action) {
      state.myFavorite = action.payload.myFavorite;
    },
    [noticesOperations.addToFavorite.rejected](state, action) {
      state.error = action.payload;
    },
    [noticesOperations.getFavorite.fulfilled](state, action) {
      state.myFavorite = action.payload.myFavorite;
    },
    [noticesOperations.getFavorite.rejected](state, action) {
      state.error = action.payload;
    },
    [noticesOperations.removeFavorite.fulfilled](state, action) {
      state.myFavorite = action.payload.myFavorite;
    },
    [noticesOperations.removeFavorite.rejected](state, action) {
      state.error = action.payload;
    },
    [noticesOperations.getOwn.fulfilled](state, action) {
      state.notices = action.payload.data;
    },
    [noticesOperations.getOwn.rejected](state, action) {
      state.error = action.payload;
    },
    [noticesOperations.getOneNotice.fulfilled](state, { payload }) {
      state.noticeInformationMore = payload.data[0];
      state.loading = false;
    },
    [noticesOperations.getOneNotice.pending](state, { payload }) {
      state.loading = true;
    },
  },
});
export default noticesSlice.reducer;
