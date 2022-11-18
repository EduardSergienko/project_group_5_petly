import { NavLink } from 'react-router-dom';
import styles from './Nav.module.scss';
export default function Nav() {
  return (
    <>
      <ul className={styles.navList}>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.active : styles.navLink
          }
          to="/news"
        >
          News
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.active : styles.navLink
          }
          to="/notices/sell"
        >
          Find pet
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.active : styles.navLink
          }
          to="/friends"
        >
          Our friend
        </NavLink>
      </ul>
    </>
  );
}
