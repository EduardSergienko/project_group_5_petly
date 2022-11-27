import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import { AddPetsButton } from '../../helpers';
import ModalAddsPet from '../ModalAddsPet/ModalAddsPet';
import PetsList from '../PetsList/PetsList';

import styles from './PetsData.module.scss';

function PetsData({ modalActivefForTablet, setmodalActivefForTablet }) {
  const { t } = useTranslation();
  const [modalActive, setModalActive] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const desctopWidth = width < 768 || width >= 1280;

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.containerBtn}>
        <h2 className={styles.title}>{t('user.myPets')}:</h2>
        <AddPetsButton
          onClickBtn={setModalActive}
          customStyle={!desctopWidth ? { display: 'none' } : { null: 'none' }}
        />
      </div>
      <div className={styles.containerList}>
        <PetsList />
      </div>
      <ModalAddsPet
        active={modalActive || modalActivefForTablet}
        setActive={setModalActive}
        setmodalActivefForTablet={setmodalActivefForTablet}
      />
    </div>
  );
}

export default PetsData;

PetsData.propTypes = {
  modalActivefForTablet: PropTypes.bool.isRequired,
  setmodalActivefForTablet: PropTypes.func.isRequired,
};
