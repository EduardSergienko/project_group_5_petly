import NoticesSearch from './NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from './NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesCategoriesList from './NoticesCategoriesList/NoticesCategoriesList';
import AddNoticeButton from './AddNoticeButton/AddNoticeButton';


import styles from './NoticesPage.module.scss';

function NoticesPage() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Find your favorite pet</h2>
      <NoticesSearch />
      <div className={styles.navWarpper}>
        <NoticesCategoriesNav />
        <div className={styles.buttonWrapper}>
          <p className={styles.buttonText}>Add pet</p>
          <AddNoticeButton/>
        </div>
      </div>
      <NoticesCategoriesList />
    </div>
  );
}

export default NoticesPage;
