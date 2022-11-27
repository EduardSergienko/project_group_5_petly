import { createSlice } from '@reduxjs/toolkit';
import noticesOperations from './noticesOperations';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
const initialState = {
  notices: [],
  myFavorite: [],
  ownAdds: [],
  noticeAdded: '',
  noticeRemoved: '',
  noticeRemovedError: '',
  noticeAddError: '',
  error: null,
  noticeInformationMore: null,
  loading: false,
  onOpenLoading: false,
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  extraReducers: {
    [noticesOperations.addNotice.pending](state, _) {
      state.error = null;
      state.noticeAdded = false;
      state.noticeAddError = null;
      state.noticeRemoved = false;
      state.noticeRemovedError = false;
      state.loading = true;
      Loading.arrows({
        svgColor: '#f59256',
        backgroundColor: 'rgba(0,0,0,0.1)',
      });
    },
    [noticesOperations.addNotice.fulfilled](state, action) {
      state.notices = [action.payload, ...state.notices];
      state.ownAdds = [action.payload, ...state.ownAdds];
      state.noticeAdded = true;
      state.error = null;
      state.loading = false;
      Loading.remove();
    },
    [noticesOperations.addNotice.rejected](state, action) {
      state.noticeAdded = false;
      state.noticeAddError = action.payload;
      state.loading = false;
      Loading.remove();
    },
    [noticesOperations.getNotices.pending](state, _) {
      state.error = null;
      state.loading = true;
      state.noticeRemoved = false;
      state.noticeAddError = null;
      state.noticeRemovedError = false;
      state.noticeAdded = false;
      Loading.arrows({
        svgColor: '#f59256',
        backgroundColor: 'rgba(0,0,0,0.1)',
      });
    },
    [noticesOperations.getNotices.fulfilled](state, action) {
      state.loading = false;
      state.notices = action.payload.data;
      Loading.remove();
    },
    [noticesOperations.getNotices.rejected](state, action) {
      state.loading = false;
      state.error = action.payload;
      state.notices = [];
      Loading.remove();
    },
    [noticesOperations.addToFavorite.pending](state, _) {
      state.error = null;
      state.noticeRemoved = false;
      state.noticeAddError = null;
      state.noticeRemovedError = false;
      state.noticeAdded = false;
      Loading.arrows({
        svgColor: '#f59256',
        backgroundColor: 'rgba(0,0,0,0.1)',
      });
    },
    [noticesOperations.addToFavorite.fulfilled](state, action) {
      state.myFavorite = action.payload.myFavorite;
      Loading.remove();
    },
    [noticesOperations.addToFavorite.rejected](state, action) {
      state.error = action.payload;
      Loading.remove();
    },
    [noticesOperations.getFavorite.pending](state, _) {
      state.error = null;
      state.loading = true;
      state.noticeRemoved = false;
      state.noticeAddError = null;
      state.noticeAdded = false;
      state.noticeRemovedError = false;
      Loading.arrows({
        svgColor: '#f59256',
        backgroundColor: 'rgba(0,0,0,0.1)',
      });
    },
    [noticesOperations.getFavorite.fulfilled](state, action) {
      state.myFavorite = action.payload?.myFavorite;
      state.loading = false;
      Loading.remove();
    },
    [noticesOperations.getFavorite.rejected](state, action) {
      state.error = action.payload;
      state.loading = false;
      Loading.remove();
    },
    [noticesOperations.removeFavorite.pending](state, _) {
      state.error = null;
      state.noticeRemoved = false;
      state.noticeAddError = null;
      state.noticeRemovedError = false;
      state.noticeAdded = false;
      Loading.arrows({
        svgColor: '#f59256',
        backgroundColor: 'rgba(0,0,0,0.1)',
      });
    },
    [noticesOperations.removeFavorite.fulfilled](state, action) {
      state.myFavorite = action.payload.myFavorite;
      Loading.remove();
    },
    [noticesOperations.removeFavorite.rejected](state, action) {
      state.error = action.payload;
      Loading.remove();
    },
    [noticesOperations.getOwn.pending](state, _) {
      state.error = null;
      state.loading = true;
      state.noticeRemoved = false;
      state.noticeAddError = null;
      state.noticeRemovedError = false;
      state.noticeAdded = false;
      Loading.arrows({
        svgColor: '#f59256',
        backgroundColor: 'rgba(0,0,0,0.1)',
      });
    },
    [noticesOperations.getOwn.fulfilled](state, action) {
      state.ownAdds = action.payload.data;
      state.loading = false;
      Loading.remove();
    },
    [noticesOperations.getOwn.rejected](state, action) {
      state.error = action.payload;
      state.loading = false;
      Loading.remove();
    },
    [noticesOperations.getOneNotice.fulfilled](state, { payload }) {
      state.noticeInformationMore = payload.data[0];
      state.onOpenLoading = false;
      Loading.remove();
    },
    [noticesOperations.getOneNotice.pending](state, { payload }) {
      state.onOpenLoading = true;
      state.noticeRemoved = false;
      state.noticeAddError = null;
      state.noticeRemovedError = false;
      state.noticeAdded = false;
      Loading.arrows({
        svgColor: '#f59256',
        backgroundColor: 'rgba(0,0,0,0.1)',
      });
    },
    [noticesOperations.deleteUserNotice.pending](state, _) {
      state.noticeRemoved = false;
      state.loading = true;
      state.noticeAddError = null;
      state.noticeRemovedError = false;
      state.noticeAdded = false;
      Loading.arrows({
        svgColor: '#f59256',
        backgroundColor: 'rgba(0,0,0,0.1)',
      });
    },
    [noticesOperations.deleteUserNotice.fulfilled]: (state, { payload }) => {
      state.ownAdds = state.ownAdds.filter(({ _id }) => _id !== payload);
      state.noticeRemoved = true;
      state.loading = false;
      state.noticeRemovedError = false;
      Loading.remove();
    },
    [noticesOperations.deleteUserNotice.rejected]: (state, { payload }) => {
      state.noticeRemoved = false;
      state.loading = false;
      state.noticeRemovedError = payload;
      Loading.remove();
    },
    [noticesOperations.searchNotice.pending]: (state, { payload }) => {
      state.error = null;
      state.loading = true;
      state.noticeRemoved = false;
      state.noticeAddError = null;
      state.noticeRemovedError = false;
      state.noticeAdded = false;
      Loading.arrows({
        svgColor: '#f59256',
        backgroundColor: 'rgba(0,0,0,0.1)',
      });
    },
    [noticesOperations.searchNotice.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.notices = payload;
      Loading.remove();
    },
    [noticesOperations.searchNotice.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.notices = [];
      Loading.remove();
    },
  },
});
export default noticesSlice.reducer;
