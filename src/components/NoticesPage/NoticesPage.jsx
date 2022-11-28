import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import NoticesSearch from './NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from './NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesCategoriesList from './NoticesCategoriesList/NoticesCategoriesList';
import AddNoticeButton from './AddNoticeButton/AddNoticeButton';
import ModalNotice from '../ModalNotice/ModalNotice';
import ModalAddNotice from 'components/ModalAddNotice/ModalAddNotice';
import FilterInput from '../../helpers/FilterInput';
import { noticesSelectors } from '../../redux/notices';
import notices from 'helpers/Notification/Notification';
import { noticesOperations } from '../../redux/notices';

import styles from './NoticesPage.module.scss';

function NoticesPage({ onFilter = () => {} }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  const items = useSelector(noticesSelectors.getNotices);
  const ownAdds = useSelector(noticesSelectors.getOwnAdds);
  const filter = useSelector(state => state.filter.value);
  const myFavorite = useSelector(noticesSelectors.myFavorite);
  const isLoggedIn = useSelector(noticesSelectors.getIsLoggedIn);
  const loading = useSelector(noticesSelectors.noticeLoading);
  const [filteredItems, setFilteredItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const isNoticeAdded = useSelector(noticesSelectors.getNoticeAdded);
  const isNoticeAddedError = useSelector(noticesSelectors.getNoticeAddError);
  const noticeRemoved = useSelector(noticesSelectors.getNoticeRemoved);
  const removeError = useSelector(noticesSelectors.getNoticeRemoveError);

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
    const handleAddItems = (arr, category) => {
      return arr?.filter(item => item.category === category && item);
    };

    categoryName === 'sell' &&
      setFilteredItems(handleAddItems(items, categoryName));
    categoryName === 'for-free' &&
      setFilteredItems(handleAddItems(items, categoryName));
    categoryName === 'lost-found' &&
      setFilteredItems(handleAddItems(items, categoryName));
  }, [categoryName, filter, items]);

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

  useEffect(() => {
    noticeRemoved && notices.showSuccess('Notice removed');

    removeError && notices.showError('Something went wrong, try again');
  }, [noticeRemoved, removeError]);

  const handleOpenModal = () => {
    isLoggedIn
      ? setIsModalOpen(true)
      : notices.showWarning(t('findpet.warning'));
  };

  const handleNoticeCategoryItems = () => {
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
  };

  const searchNews = evt => {
    evt.preventDefault();
    const { search } = evt.target.elements;

    if (search.value.trim() === '') {
      return;
    }

    if (
      categoryName === 'sell' ||
      categoryName === 'for-free' ||
      categoryName === 'lost-found'
    ) {
      dispatch(
        noticesOperations.searchNotice({
          category: categoryName,
          title: search.value,
        })
      );
    }
  };

  const handleNoticeCategory = () => {
    if (
      categoryName === 'sell' ||
      categoryName === 'for-free' ||
      categoryName === 'lost-found'
    ) {
      return true;
    }
    return false;
  };

  const handleSearchInputChange = evt => {
    if (evt.target.value.trim()) {
      return;
    }
    handleNoticeCategoryItems();
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{t('findpet.title')}</h2>
      {handleNoticeCategory() && (
        <FilterInput
          onSubmit={searchNews}
          onChange={handleSearchInputChange}
          cssClass={styles.noticesInput}
        />
      )}
      {!handleNoticeCategory() && <NoticesSearch onChange={onFilter} />}
      <div className={styles.navWarpper}>
        <NoticesCategoriesNav />
        <div className={styles.buttonWrapper}>
          <p className={styles.buttonText}>{t('pet.addPet')}</p>
          <AddNoticeButton handleOpenModal={handleOpenModal} />
        </div>
      </div>
      {!filteredItems.length && (
        <p className={styles.notification}>{t('findpet.noAds')}</p>
      )}
      <div
        className={`${
          isLoggedIn ? styles.stickyLoginBtnWrapper : styles.stickyBtnWrapper
        }`}
      >
        <AddNoticeButton
          handleOpenModal={handleOpenModal}
          isLoggedIn={isLoggedIn}
        />
      </div>
      {!loading && (
        <NoticesCategoriesList
          items={filteredItems}
          setActive={setModalActive}
          categoryName={categoryName}
          setIsModalOpen={setIsModalOpen}
        />
      )}
      {isModalOpen && <ModalAddNotice setIsModalOpen={setIsModalOpen} />}
      <ModalNotice active={modalActive} setActive={setModalActive} />
    </div>
  );
}

export default NoticesPage;
