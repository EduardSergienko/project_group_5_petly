import { NavLink } from 'react-router-dom';
import styles from './Nav.module.scss';
export default function Nav({ toggleMenu }) {
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
          News
        </NavLink>
        <NavLink
          onClick={toggleMenu}
          className={({ isActive }) =>
            isActive ? styles.active : styles.navLink
          }
          to="/notices"
        >
          Find pet
        </NavLink>
        <NavLink
          onClick={toggleMenu}
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
