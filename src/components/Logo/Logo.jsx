import styles from './Logo.module.scss';
export default function Logo() {
  return (
    <span className={styles.logo}>
      pe<span className={styles.highlight}>t</span>ly
    </span>
  );
}
