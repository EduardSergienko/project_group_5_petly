import styles from './NoticesCategoriesNav.module.scss';
// import Button from './NoticesCategoriesNavButton';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function NoticesCategoriesNav() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    return (
      <ul className={styles.list}>
        <li className={styles.item}><NavLink className={({ isActive }) =>
            isActive ? styles.active : styles.button
          } to="/notices/lost-found">Lost/Found</NavLink></li>
        <li className={styles.item}><NavLink className={({ isActive }) =>
            isActive ? styles.active : styles.button
          } to="/notices/for-free">In good hands</NavLink></li>
        <li className={styles.item}><NavLink className={({ isActive }) =>
            isActive ? styles.active : styles.button
          } to="/notices/sell">Sell</NavLink></li>
        {isLoggedIn && 
        <li className={styles.item}><NavLink className={({ isActive }) =>
            isActive ? styles.active : styles.button
          } to="/notices/favorite">Favorite ads</NavLink></li>
        }
        {isLoggedIn &&
          <li className={styles.item}><NavLink className={({ isActive }) =>
            isActive ? styles.active : styles.button
          } to="/notices/own">My ads</NavLink></li>
        }
      </ul>
  )
}

export default NoticesCategoriesNav;