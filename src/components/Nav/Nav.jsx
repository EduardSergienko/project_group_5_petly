import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './Nav.module.scss';

export default function Nav({ toggleMenu }) {
  const { t } = useTranslation();
  return (
    <>
      <ul className={styles.navList}>
        <NavLink
          onClick={toggleMenu}
          className={({ isActive }) =>
            isActive ? styles.active : styles.navLink
          }
          to="/news"
        >
          {t('nav.news')}
        </NavLink>
        <NavLink
          onClick={toggleMenu}
          className={({ isActive }) =>
            isActive ? styles.active : styles.navLink
          }
          to="/notices/sell"
        >
          {t('nav.findpet')}
        </NavLink>
        <NavLink
          onClick={toggleMenu}
          className={({ isActive }) =>
            isActive ? styles.active : styles.navLink
          }
          to="/friends"
        >
          {t('nav.ourfriends')}
        </NavLink>
      </ul>
    </>
  );
}
