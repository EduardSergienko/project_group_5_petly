import styles from './BurgerBtn.module.scss';

export default function BurgerBtn({ toggleNav }) {
  return (
    <button
      onClick={toggleNav}
      className={styles.burgerBtn}
      type="button"
      id="burger"
      aria-label="burger"
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            d="M5 30H35V26.6667H5V30ZM5 21.6667H35V18.3333H5V21.6667ZM5 10V13.3333H35V10H5Z"
            fill="#212121"
          />
        </g>
      </svg>
    </button>
  );
}
