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
};
export default noticesSelectors;
