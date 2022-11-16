import { useState, useEffect } from 'react';

import { AddPetsButton } from '../../helpers';
import ModalAddsPet from '../ModalAddsPet/ModalAddsPet';
import PetsList from '../PetsList/PetsList';

import styles from './PetsData.module.scss';

function PetsData({ modalActivefForTablet, setmodalActivefForTablet }) {
  const [modalActive, setModalActive] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const mobileWidth = width <= 768 && width > 480;

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.containerBtn}>
        <h2 className={styles.title}>My pets:</h2>
        <AddPetsButton
          onClickBtn={setModalActive}
          customStyle={mobileWidth ? { display: 'none' } : { null: 'none' }}
        />
      </div>
      <div>
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
