import { useTranslation } from 'react-i18next';
import styles from './NoticesCategoriesNav.module.scss';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function NoticesCategoriesNav() {
  const { t } = useTranslation();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.active : styles.button
          }
          to="/notices/lost-found"
        >
          {t('findpet.lostFound')}
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.active : styles.button
          }
          to="/notices/for-free"
        >
          {t('findpet.goodHands')}
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.active : styles.button
          }
          to="/notices/sell"
        >
          {t('findpet.sell')}
        </NavLink>
      </li>
      {isLoggedIn && (
        <li className={styles.item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : styles.button
            }
            to="/notices/favorite"
          >
            {t('findpet.favorite')}
          </NavLink>
        </li>
      )}
      {isLoggedIn && (
        <li className={styles.item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : styles.button
            }
            to="/notices/own"
          >
            {t('findpet.myAds')}
          </NavLink>
        </li>
      )}
    </ul>
  );
}

export default NoticesCategoriesNav;
