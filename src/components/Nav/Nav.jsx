import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './Nav.module.scss';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Nav({ toggleMenu }) {
  const { t } = useTranslation();
  const location = useLocation();
  const [pageActive, setPageActive] = useState(false);

  useEffect(() => {
    const [, page] = location.pathname.split('/');

    page === 'notices' ? setPageActive(true) : setPageActive(false);
  }, [toggleMenu, location.pathname]);

  return (
    <div className={styles.navList}>
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
        className={pageActive ? styles.active : styles.navLink}
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
    </div>
  );
}
