import ellipse from '../../image/ellipse.png';
import plus from '../../image/plus.png';

import styles from './AddPetsButton.module.scss';

function AddPetsButton({ onClickBtn }) {
  return (
    <button className={styles.button} onClick={() => onClickBtn(true)}>
      Add pet
      <div className={styles.imageContainer}>
        <img className={styles.imageEllipse} src={ellipse} alt="ellipse" />
        <img className={styles.imagePlus} src={plus} alt="plus" />
      </div>
    </button>
  );
}

export { AddPetsButton };
