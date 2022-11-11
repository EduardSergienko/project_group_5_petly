import { useState } from 'react';

import { Modal1, Modal2 } from '.';

import close from '../../image/svg/closeLine.svg';

import styles from './ModalAddsPet.module.scss';

function ModalAddsPet({ active, setActive }) {
  const [page, setPage] = useState(2);

  return (
    <div
      className={styles.container + ' ' + (active ? styles.active : '')}
      onClick={() => setActive(false)}
    >
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        {page === 1 && <Modal1 setActive={setActive} setPage={setPage} />}
        {page === 2 && <Modal2 setPage={setPage} />}
        <button className={styles.button} onClick={() => setActive(false)}>
          <img className={styles.imgB} src={close} alt="close" />
        </button>
      </div>
    </div>
  );
}

export default ModalAddsPet;
