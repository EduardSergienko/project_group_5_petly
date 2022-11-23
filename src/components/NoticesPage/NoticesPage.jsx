import NoticesSearch from './NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from './NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesCategoriesList from './NoticesCategoriesList/NoticesCategoriesList';
import AddNoticeButton from './AddNoticeButton/AddNoticeButton';
import ModalNotice from '../ModalNotice/ModalNotice';
import ModalAddNotice from 'components/ModalAddNotice/ModalAddNotice';
import { noticesSelectors } from '../../redux/notices';
import notices from 'helpers/Notification/Notification';

import styles from './NoticesPage.module.scss';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { noticesOperations } from '../../redux/notices';
import { useState } from 'react';
import Loader from 'components/Loader';

function NoticesPage({ onFilter = () => {} }) {
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  const items = useSelector(noticesSelectors.getNotices);
  const ownAdds = useSelector(noticesSelectors.getOwnAdds);
  const filter = useSelector(state => state.filter.value);
  const myFavorite = useSelector(noticesSelectors.myFavorite);
  const isLoggedIn = useSelector(noticesSelectors.getIsLoggedIn);
  const error = useSelector(noticesSelectors.getNoticeError);
  const loading = useSelector(noticesSelectors.noticeLoading);
  const [filteredItems, setFilteredItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isNoticeAdded = useSelector(noticesSelectors.getNoticeAdded);
  const isNoticeAddedError = useSelector(noticesSelectors.getNoticeAddError);
  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    const filterItems = arr => {
      return filter
        ? arr?.filter(({ title }) => title?.toLowerCase().includes(filter))
        : arr;
    };
    if (categoryName === 'sell' || 'for-free' || 'lost-found') {
      setFilteredItems(filterItems(items));
    }
    if (categoryName === 'favorite') {
      setFilteredItems(filterItems(myFavorite));
    }
    if (categoryName === 'own') {
      setFilteredItems(filterItems(ownAdds));
    }
  }, [categoryName, filter, items, setFilteredItems, myFavorite, ownAdds]);

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

    isNoticeAddedError && notices.showError('Something went wrong, try again');
  }, [isNoticeAdded, isNoticeAddedError]);

  useEffect(() => {
    const handleBodyOverflow = () => {
      if (isModalOpen) {
        return (document.body.style.overflow = 'hidden');
      }
      return (document.body.style.overflow = '');
    };
    handleBodyOverflow();
  }, [isModalOpen]);

  const handleOpenModal = () => {
    isLoggedIn
      ? setIsModalOpen(true)
      : notices.showWarning('You need to authorize before adding notices.');
  };

  // if (error) {
  //   return (
  //     <div className={styles.container}>
  //       <h2 className={styles.title}>Find your favorite pet</h2>
  //       <NoticesSearch onChange={onFilter} />
  //       <div className={styles.navWarpper}>
  //         <NoticesCategoriesNav />
  //         <div className={styles.buttonWrapper}>
  //           <p className={styles.buttonText}>Add pet</p>
  //           <AddNoticeButton handleOpenModal={handleOpenModal} />
  //         </div>
  //       </div>
  //       <p className={styles.notification}>
  //         Sorry, there is no pets in sellected category.
  //       </p>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div className={styles.container}>
  //       <h2 className={styles.title}>Find your favorite pet</h2>
  //       <NoticesSearch onChange={onFilter} />
  //       <div className={styles.navWarpper}>
  //         <NoticesCategoriesNav />
  //         <div className={styles.buttonWrapper}>
  //           <p className={styles.buttonText}>Add pet</p>
  //           <AddNoticeButton handleOpenModal={handleOpenModal} />
  //         </div>
  //       </div>
  //       {!loading ? (
  //         <NoticesCategoriesList
  //           items={filteredItems}
  //           setActive={setModalActive}
  //         />
  //       ) : (
  //         !modalActive && <Loader />
  //       )}
  //       <div
  //         className={`${
  //           isLoggedIn ? styles.stickyLoginBtnWrapper : styles.stickyBtnWrapper
  //         }`}
  //       >
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
      {error && (
        <p className={styles.notification}>
          Sorry, there is no pets in sellected category.
        </p>
      )}

      {!loading ? (
        <NoticesCategoriesList
          items={filteredItems}
          setActive={setModalActive}
        />
      ) : (
        !modalActive && <Loader />
      )}
      <div
        className={`${
          isLoggedIn ? styles.stickyLoginBtnWrapper : styles.stickyBtnWrapper
        }`}
      >
        <AddNoticeButton handleOpenModal={handleOpenModal} />
      </div>
      {isModalOpen && <ModalAddNotice setIsModalOpen={setIsModalOpen} />}
      <ModalNotice active={modalActive} setActive={setModalActive} />
    </div>
  );
}

export default NoticesPage;
