import { NavLink } from 'react-router-dom';
import styles from './Nav.module.scss';
export default function Nav() {
  return (
    <nav>
      <ul>
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
          to="/notices"
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
    </nav>
  );
}
