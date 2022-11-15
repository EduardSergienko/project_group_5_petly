import styles from './NoticesSearch.module.scss';

function NoticesSearch() {
  return (
    <input
      className={styles.input}
      placeholder='Search'
    />
  )
}

export default NoticesSearch;