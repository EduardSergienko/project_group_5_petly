import { useState } from 'react';

import { AddPetsButton } from '../../helpers';
import ModalAddsPet from '../ModalAddsPet/ModalAddsPet';

import styles from './PetsData.module.scss';

function PetsData() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.containerBtn}>
        <h2 className={styles.title}>My pets:</h2>
        <AddPetsButton onClickBtn={setModalActive} />
      </div>
      <ModalAddsPet active={modalActive} setActive={setModalActive} />
    </div>
  );
}

export default PetsData;
