import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

// import ellipse from '../../image/ellipse.png';
import plus from '../../image/plus.png';

import styles from './AddPetsButton.module.scss';

function AddPetsButton({ onClickBtn, customStyle }) {
  const { t } = useTranslation();

  return (
    <button
      className={styles.button}
      style={customStyle}
      onClick={() => onClickBtn(true)}
    >
      {t('pet.addPet')}
      <div className={styles.imageContainer}>
        {/* <img className={styles.imageEllipse} src={ellipse} alt="ellipse" /> */}
        <img className={styles.imagePlus} src={plus} alt="plus" />
      </div>
    </button>
  );
}

export { AddPetsButton };

AddPetsButton.propTypes = {
  onClickBtn: PropTypes.func,
  customStyle: PropTypes.object,
};
