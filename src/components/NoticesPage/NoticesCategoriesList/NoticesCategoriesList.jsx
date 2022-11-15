import styles from './NoticesCategoriesList.module.scss';
import NoticesCategoriesItem from './NoticesCategoriesItem';

function NoticesCategoriesList() {
//    const list = contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
    return (
        <ul className={styles.list}>
            {/* {list.map(item => (
                <li className="ContactList__item" key={item.id}>
                    <ContactListElement props={item} />
                    <button className="ContactList__button" data-id={item.id} onClick={onDelete} type="button">Delete</button>
                </li>
            ))} */}
            <li>
                <NoticesCategoriesItem/>
            </li>
            <li>
                <NoticesCategoriesItem/>
            </li>
            <li>
                <NoticesCategoriesItem/>
            </li>
            <li>
                <NoticesCategoriesItem/>
            </li>
            <li>
                <NoticesCategoriesItem/>
            </li>
        </ul>
    )
}

export default NoticesCategoriesList;