import NoticesSearch from './NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from './NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesCategoriesList from './NoticesCategoriesList/NoticesCategoriesList';
import AddNoticeButton from './AddNoticeButton/AddNoticeButton';
import ModalAddNotice from 'components/ModalAddNotice/ModalAddNotice';
import { noticesSelectors } from '../../redux/notices';
import notices from 'helpers/Notification/Notification';

import styles from './NoticesPage.module.scss';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { noticesOperations } from '../../redux/notices';
import { useState } from 'react';

function NoticesPage({ onFilter = () => {} }) {
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  const items = useSelector(state => state.notices.notices);
  const filter = useSelector(state => state.filter.value);
  const myFavorite = useSelector(state => state.notices.myFavorite);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const [filteredItems, setFilteredItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isNoticeAdded = useSelector(noticesSelectors.getNoticeAdded);
  const isNoticeAddedError = useSelector(noticesSelectors.getNoticeAddError);

  useEffect(() => {
    if (categoryName === 'sell' || 'for-free' || 'lost-found' || 'own') {
      const filtered = filter
        ? items.filter(({ title }) => title.toLowerCase().includes(filter))
        : items;
      setFilteredItems(filtered);
    }
    if (categoryName === 'favorite') {
      setFilteredItems(myFavorite);
    }
  }, [categoryName, filter, items, setFilteredItems, myFavorite]);

  useEffect(() => {
    categoryName === 'sell' &&
      dispatch(noticesOperations.getNotices(categoryName));
    categoryName === 'for-free' &&
      dispatch(noticesOperations.getNotices(categoryName));
    categoryName === 'lost-found' &&
      dispatch(noticesOperations.getNotices(categoryName));
    categoryName === 'own' &&
      isLoggedIn &&
      dispatch(noticesOperations.getOwn());
    categoryName === 'favorite' &&
      isLoggedIn &&
      dispatch(noticesOperations.getFavorite());
  }, [categoryName, isLoggedIn, dispatch]);

  useEffect(() => {
    if (isNoticeAdded) {
      notices.showSuccess('Notice successfully added');
      setIsModalOpen(false);
    }

    isNoticeAddedError &&
      notices.showWarning('Something went wrong, try again');
  }, [isNoticeAdded, isNoticeAddedError]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Find your favorite pet</h2>
      <NoticesSearch onChange={onFilter} />
      <div className={styles.navWarpper}>
        <NoticesCategoriesNav />
        <div className={styles.buttonWrapper}>
          <p className={styles.buttonText}>Add pet</p>
          <AddNoticeButton handleOpenModal={handleOpenModal} />
        </div>
      </div>
      <div className={styles.stickyBtnWrapper}>
        <AddNoticeButton handleOpenModal={handleOpenModal} />
      </div>
      <NoticesCategoriesList items={filteredItems} />
      {isModalOpen && <ModalAddNotice setIsModalOpen={setIsModalOpen} />}
    </div>
  );
}

export default NoticesPage;
