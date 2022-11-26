import styles from './NoticesCategoriesList.module.scss';
import NoticesCategoriesItem from './NoticesCategoriesItem';

function NoticesCategoriesList({ items, setActive, categoryName }) {
  return (
    <>
      <ul className={styles.list}>
        {items?.map(item => (
          <li key={item?._id}>
            <NoticesCategoriesItem
              item={item}
              setActive={setActive}
              categoryName={categoryName}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default NoticesCategoriesList;
