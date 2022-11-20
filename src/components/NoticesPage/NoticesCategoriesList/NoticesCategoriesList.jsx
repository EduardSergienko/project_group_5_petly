import styles from './NoticesCategoriesList.module.scss';
import NoticesCategoriesItem from './NoticesCategoriesItem';

function NoticesCategoriesList({ items }) {
    return (
        <ul className={styles.list}>
            {items.map(item => (
                <li key={item._id}>
                    <NoticesCategoriesItem item={item} />
                </li>
            ))}
        </ul>
    )
}

export default NoticesCategoriesList;