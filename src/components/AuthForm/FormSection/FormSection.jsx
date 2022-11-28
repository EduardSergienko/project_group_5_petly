import styles from './FormSection.module.scss';

const FormSection = ({ children }) => {
  return <div className={styles.background}>{children}</div>;
};

export default FormSection;
