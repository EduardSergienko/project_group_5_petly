const getNotices = state => state.notices.notices;

const getNoticeAdded = state => state.notices.noticeAdded;

const getNoticeRemoved = state => state.notices.noticeRemoved;

const getNoticeAddError = state => state.notices.getNoticeAddError;

const getNoticeError = state => state.notices.error;

const noticesSelectors = {
  getNotices,
  getNoticeAdded,
  getNoticeRemoved,
  getNoticeError,
  getNoticeAddError,
};
export default noticesSelectors;
