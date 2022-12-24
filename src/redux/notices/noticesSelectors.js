import { createSelector } from '@reduxjs/toolkit';

const getNotices = state => state.notices.notices;
const myFavorite = state => state.notices.myFavorite;

const getNoticeAdded = state => state.notices.noticeAdded;

const getNoticeRemoved = state => state.notices.noticeRemoved;

const getNoticeInformationMore = state => state.notices.noticeInformationMore;
const noticeLoading = state => state.notices.loading;

const noticeLoadingOnOpen = state => state.notices.onOpenLoading;

const getNoticeAddError = state => state.notices.noticeAddError;

const getNoticeRemoveError = state => state.notices.noticeRemovedError;

const getMyFavoriteNotice = state => state.notices.myFavorite;

const getNoticeError = state => state.notices.error;

const getOwnAdds = state => state.notices.ownAdds;
const getIsLoggedIn = state => state.auth.isLoggedIn;

const getFilter = state => state.filter;

const getFilteredNotices = createSelector(
  [getNotices, getOwnAdds, myFavorite, getFilter],
  (notices, ownAdds, favorite, filter) => {
    switch (filter) {
      case 'sell':
      case 'for-free':
      case 'lost-found':
        return notices.filter(notice => notice.category === filter);
      case 'own':
        return ownAdds;
      case 'favorite':
        return favorite;
      default:
        return [];
    }
  }
);

const noticesSelectors = {
  getNotices,
  getNoticeAdded,
  getNoticeRemoved,
  getNoticeInformationMore,
  noticeLoading,
  myFavorite,
  getNoticeError,
  getNoticeAddError,
  getMyFavoriteNotice,
  getOwnAdds,
  getIsLoggedIn,
  noticeLoadingOnOpen,
  getNoticeRemoveError,
  getFilteredNotices,
};
export default noticesSelectors;
