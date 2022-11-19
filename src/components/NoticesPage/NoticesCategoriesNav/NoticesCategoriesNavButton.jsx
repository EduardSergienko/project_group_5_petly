import styles from './NoticesCategoriesNav.module.scss';

function NoticesCategoriesNavButton({name}) {
  return (
    <button className={styles.button}>{name}</button>
  )
}

export default NoticesCategoriesNavButton;