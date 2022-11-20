import NoticesSearch from './NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from './NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesCategoriesList from './NoticesCategoriesList/NoticesCategoriesList';
import AddNoticeButton from './AddNoticeButton/AddNoticeButton';


import styles from './NoticesPage.module.scss';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {noticesOperations} from '../../redux/notices'

function NoticesPage({ onFilter = () => { } }) {
  const dispatch = useDispatch()
  const { categoryName } = useParams()
  const items = useSelector(state => state.notices.notices)
  const filter = useSelector(state => state.filter.value)
  const filteredItems = filter ? items.filter(({ title }) => title.toLowerCase().includes(filter)) : items
  
  useEffect(() => {
    dispatch(noticesOperations.getNotices(categoryName))
  }, [categoryName, dispatch])

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
