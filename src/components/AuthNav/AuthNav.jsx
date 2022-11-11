import { Link } from 'react-router-dom';
import styles from './AuthNav.module.scss';
export default function AuthNav() {
  return (
    <div className={styles.authNavWrap}>
      <Link className={styles.authNavLink} to="/login">
        Login
      </Link>
      <Link className={styles.authNavLink} to="/register">
        Registration
      </Link>
    </div>
  );
}
