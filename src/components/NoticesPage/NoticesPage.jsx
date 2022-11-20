import NoticesSearch from './NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from './NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesCategoriesList from './NoticesCategoriesList/NoticesCategoriesList';
import AddNoticeButton from './AddNoticeButton/AddNoticeButton';


import styles from './NoticesPage.module.scss';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {noticesOperations} from '../../redux/notices'
import { useState } from 'react';

function NoticesPage({ onFilter = () => { } }) {
  const dispatch = useDispatch()
  const { categoryName } = useParams()
  const items = useSelector(state => state.notices.notices)
  const filter = useSelector(state => state.filter.value)
  const myFavorite = useSelector(state => state.notices.myFavorite)
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    if (categoryName === 'sell' || 'for-free' || 'lost-found' || 'own') {
      const filtered = filter ? items.filter(({ title }) => title.toLowerCase().includes(filter)) : items
      setFilteredItems(filtered)
    }
    if (categoryName === 'favorite') {
      setFilteredItems(myFavorite)
    }
  }, [categoryName, filter, items, setFilteredItems, myFavorite])

  useEffect(() => {
    if (categoryName === 'sell' || 'for-free' || 'lost-found') {
      dispatch(noticesOperations.getNotices(categoryName))
    }
    if (categoryName === 'own') {
      dispatch(noticesOperations.getOwn(categoryName))
    }
    if (isLoggedIn) {
      dispatch(noticesOperations.getFavorite())
    }
  }, [categoryName, isLoggedIn, dispatch])

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Find your favorite pet</h2>
      <NoticesSearch onChange={ onFilter } />
      <div className={styles.navWarpper}>
        <NoticesCategoriesNav />
        <div className={styles.buttonWrapper}>
          <p className={styles.buttonText}>Add pet</p>
          <AddNoticeButton/>
        </div>
      </div>
      <NoticesCategoriesList items={filteredItems}/>
    </div>
  );
}

export default NoticesPage;
