import NoticesSearch from './NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from './NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesCategoriesList from './NoticesCategoriesList/NoticesCategoriesList';
import AddNoticeButton from './AddNoticeButton/AddNoticeButton';


import styles from './NoticesPage.module.scss';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function NoticesPage({ onFilter = () => { } }) {
  const {categoryName} = useParams()
  const items = useSelector(state => state.notices.items)
  const filter = useSelector(state => state.filter.value)
  const filteredCategories = items.filter(({ category }) => category.toLowerCase().includes(categoryName))
  const filteredItems = filter ? filteredCategories.filter(({ title }) => title.toLowerCase().includes(filter)) : filteredCategories
  
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
