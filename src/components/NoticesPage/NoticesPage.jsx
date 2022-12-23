import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import NoticesCategoriesNav from './NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesCategoriesList from './NoticesCategoriesList/NoticesCategoriesList';
import AddNoticeButton from './AddNoticeButton/AddNoticeButton';
import ModalNotice from 'components/ModalNotice/ModalNotice';
import ModalAddNotice from 'components/ModalAddNotice/ModalAddNotice';
import FilterInput from 'helpers/FilterInput';
import { noticesSelectors, filterNotices } from 'redux/notices';
import notices from 'helpers/Notification/Notification';
import { noticesOperations } from 'redux/notices';
import Container from 'components/Container';
import styles from './NoticesPage.module.scss';

function NoticesPage() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [noticesCategory] = useState(['sell', 'for-free', 'lost-found']);
  const isLoggedIn = useSelector(noticesSelectors.getIsLoggedIn);
  const loading = useSelector(noticesSelectors.noticeLoading);
  const getNoticeError = useSelector(noticesSelectors.getNoticeError);
  const isNoticeAdded = useSelector(noticesSelectors.getNoticeAdded);
  const isNoticeAddedError = useSelector(noticesSelectors.getNoticeAddError);
  const noticeRemoved = useSelector(noticesSelectors.getNoticeRemoved);
  const removeError = useSelector(noticesSelectors.getNoticeRemoveError);
  const filteredNotices = useSelector(noticesSelectors.getFilteredNotices);

  useEffect(() => {
    noticesCategory.includes(categoryName) &&
      dispatch(noticesOperations.getNotices(categoryName));
    categoryName === 'own' &&
      isLoggedIn &&
      dispatch(noticesOperations.getOwn());
    categoryName === 'favorite' &&
      isLoggedIn &&
      dispatch(noticesOperations.getFavorite());
  }, [categoryName, isLoggedIn, noticesCategory, dispatch]);

  useEffect(() => {
    dispatch(filterNotices(categoryName));
  }, [dispatch, categoryName]);

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
    noticesCategory.includes(categoryName) &&
      dispatch(noticesOperations.getNotices(categoryName));

    categoryName === 'own' &&
      isLoggedIn &&
      dispatch(noticesOperations.getOwn());
    categoryName === 'favorite' &&
      isLoggedIn &&
      dispatch(noticesOperations.getFavorite());
  };

  const searchNotice = evt => {
    evt.preventDefault();
    const { search } = evt.target.elements;

    if (search.value.trim() === '') {
      return;
    }

    noticesCategory.includes(categoryName) &&
      dispatch(
        noticesOperations.searchNotice({
          category: categoryName,
          title: search.value,
        })
      );
  };

  const handleSearchInputChange = evt => {
    if (evt.target.value.trim()) {
      return;
    }
    handleNoticeCategoryItems();
  };

  return (
    <div className={styles.notiesSection}>
      <Container>
        <h1 className={styles.title}>{t('findpet.title')}</h1>
        <FilterInput
          onSubmit={searchNotice}
          onChange={handleSearchInputChange}
          cssClass={styles.noticesInput}
        />
        <div className={styles.navWarpper}>
          <NoticesCategoriesNav />
          <div className={styles.buttonWrapper}>
            <p className={styles.buttonText}>{t('pet.addPet')}</p>
            <AddNoticeButton handleOpenModal={handleOpenModal} />
          </div>
        </div>
        {!filteredNotices.length && getNoticeError && (
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
            items={filteredNotices}
            setActive={setModalActive}
            categoryName={categoryName}
            setIsModalOpen={setIsModalOpen}
          />
        )}
        {isModalOpen && <ModalAddNotice setIsModalOpen={setIsModalOpen} />}
        <ModalNotice active={modalActive} setActive={setModalActive} />
      </Container>
    </div>
  );
}

export default NoticesPage;
