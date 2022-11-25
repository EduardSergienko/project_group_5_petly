import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './AuthNav.module.scss';

export default function AuthNav({ toggleMenu }) {
  const { t } = useTranslation();

  return (
    <div className={styles.authNavWrap}>
      <NavLink onClick={toggleMenu} className={styles.authNavLink} to="login">
        {t('auth.login')}
      </NavLink>
      <NavLink
        onClick={toggleMenu}
        className={styles.authNavRight}
        to="register"
      >
        {t('auth.register')}
      </NavLink>
    </div>
  );
}
