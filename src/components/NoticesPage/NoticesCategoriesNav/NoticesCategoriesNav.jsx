import styles from './NoticesCategoriesNav.module.scss';
import Button from './NoticesCategoriesNavButton';

function NoticesCategoriesNav() {
    return (
      <ul className={styles.list}>
        <li><Button name='Lost/Found'/></li>
        <li><Button name='In good hands'/></li>
        <li><Button name='Sell'/></li>
        <li><Button name='Favorite ads'/></li>
        <li><Button name='My ads'/></li>
      </ul>
  )
}

export default NoticesCategoriesNav;