import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.scss';

export default function AuthNav({ toggleMenu }) {
  return (
    <div className={styles.authNavWrap}>
      <NavLink onClick={toggleMenu} className={styles.authNavLink} to="login">
        Login
      </NavLink>
      <NavLink
        onClick={toggleMenu}
        className={styles.authNavLink}
        to="register"
      >
        Registration
      </NavLink>
    </div>
  );
}
