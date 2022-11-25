import { createSlice } from '@reduxjs/toolkit';
import noticesOperations from './noticesOperations';

const initialState = {
  notices: [],
  myFavorite: [],
  ownAdds: [],
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
      state.loading = true;
    },
    [noticesOperations.getNotices.fulfilled](state, action) {
      state.loading = false;
      state.notices = action.payload.data;
    },
    [noticesOperations.getNotices.rejected](state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    [noticesOperations.addToFavorite.pending](state, _) {
      state.error = null;
    },
    [noticesOperations.addToFavorite.fulfilled](state, action) {
      state.myFavorite = action.payload.myFavorite;
    },
    [noticesOperations.addToFavorite.rejected](state, action) {
      state.error = action.payload;
    },
    [noticesOperations.getFavorite.pending](state, _) {
      state.error = null;
      state.loading = true;
    },
    [noticesOperations.getFavorite.fulfilled](state, action) {
      state.myFavorite = action.payload?.myFavorite;
      state.loading = false;
    },
    [noticesOperations.getFavorite.rejected](state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    [noticesOperations.removeFavorite.pending](state, _) {
      state.error = null;
    },
    [noticesOperations.removeFavorite.fulfilled](state, action) {
      state.myFavorite = action.payload.myFavorite;
    },
    [noticesOperations.removeFavorite.rejected](state, action) {
      state.error = action.payload;
    },
    [noticesOperations.getOwn.pending](state, _) {
      state.error = null;
      state.loading = true;
    },
    [noticesOperations.getOwn.fulfilled](state, action) {
      state.ownAdds = action.payload.data;
      state.loading = false;
    },
    [noticesOperations.getOwn.rejected](state, action) {
      state.error = action.payload;
      state.loading = false;
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