import { useTranslation } from 'react-i18next';
import styles from './AddNoticeButton.module.scss';
import plus from '../../../image/svg/plus-button.svg';

function AddNoticeButton({ handleOpenModal, isLoggedIn }) {
  const { t } = useTranslation();

  return (
    <>
      <button
        className={`${styles.addNoticeButton} ${
          !isLoggedIn ? styles.noAuthBtnPosition : ''
        }`}
        onClick={handleOpenModal}
      >
        <img src={plus} className={styles.addNoticeImage} alt="plus" />
        <span className={styles.addNoticeSpan}>{t('pet.addPet')}</span>
      </button>
    </>
  );
}

export default AddNoticeButton;
