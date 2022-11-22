import styles from './NoticesCategoriesList.module.scss';
import NoticesCategoriesItem from './NoticesCategoriesItem';

function NoticesCategoriesList({ items, setActive }) {
  return (
    <>
      <ul className={styles.list}>
        {items?.map(item => (
          <li key={item?._id}>
            <NoticesCategoriesItem item={item} setActive={setActive} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default NoticesCategoriesList;
