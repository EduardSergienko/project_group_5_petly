const getNotices = state => state.notices.notices;

const getNoticeAdded = state => state.notices.noticeAdded;

const getNoticeRemoved = state => state.notices.noticeRemoved;

const noticesSelectors = {
  getNotices,
  getNoticeAdded,
  getNoticeRemoved,
};
export default noticesSelectors;
