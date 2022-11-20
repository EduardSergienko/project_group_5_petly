import styles from './AddNoticeButton.module.scss';
import plus from '../../../image/svg/plus-button.svg';

function AddNoticeButton({ handleOpenModal }) {
  return (
    <>
      <button className={`${styles.addNoticeButton}`} onClick={handleOpenModal}>
        <img src={plus} className={styles.addNoticeImage} alt="plus" />
        <span className={styles.addNoticeSpan}>Add pet</span>
      </button>
    </>
  );
}

export default AddNoticeButton;
