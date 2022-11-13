import { useEffect, useState } from 'react';

import { Modal1, Modal2 } from '.';

import close from '../../image/svg/closeLine.svg';

import styles from './ModalAddsPet.module.scss';

function ModalAddsPet({ active, setActive }) {
  const [page, setPage] = useState(1);
  const [modal1Values, setModal1Values] = useState({
    name: '',
    birthday: '',
    breed: '',
  });
  const [modal2Values, setModal2Values] = useState({
    comments: '',
    photo: '',
  });

  const takesInputeValues = data => {
    setModal1Values(data);
  };

  useEffect(() => {
    if (active) {
      setPage(1);
      setModal1Values({
        name: '',
        birthday: '',
        breed: '',
      });

      setModal2Values({
        comments: '',
        photo: '',
      });
    }
  }, [active]);

  const createPetsPost = data => {
    const formData = new FormData();
    formData.append('name', modal1Values.name);
    formData.append('birthday', modal1Values.birthday);
    formData.append('breed', modal1Values.breed);
    formData.append('comments', data.comments);
    formData.append('photo', data.file);

    // const nnn = {
    //   name: modal1Values.name,
    //   birthday: modal1Values.birthday,
    //   breed: modal1Values.breed,
    //   comments: data.comments,
    //   photo: data.file,
    // };

    // console.log(nnn);
  };

  return (
    <div
      className={styles.container + ' ' + (active ? styles.active : '')}
      onClick={() => setActive(false)}
    >
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        {page === 1 && (
          <Modal1
            setActive={setActive}
            setPage={setPage}
            createPetsPost={takesInputeValues}
            active={active}
            modalDefaultValues={modal1Values}
          />
        )}
        {page === 2 && (
          <Modal2
            setPage={setPage}
            createPetsPost={createPetsPost}
            setActive={setActive}
            active={active}
            setModal2Values={setModal2Values}
            modalDefaultValues={modal2Values}
          />
        )}
        <button className={styles.button} onClick={() => setActive(false)}>
          <img className={styles.imgB} src={close} alt="close" />
        </button>
      </div>
    </div>
  );
}

export default ModalAddsPet;
