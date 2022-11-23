import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { userOperations } from '../../redux/user';

import { Modal1, Modal2 } from '.';

import close from '../../image/svg/closeLine.svg';

import styles from './ModalAddsPet.module.scss';

function ModalAddsPet({ active, setActive, setmodalActivefForTablet }) {
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
  const dispatch = useDispatch();

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
    formData.append('birthDay', modal1Values.birthday);
    formData.append('breed', modal1Values.breed);
    formData.append('comments', data.comments);
    formData.append('avatar', data.file);

    dispatch(userOperations.createUserPost(formData));
  };

  const onCloseModal = () => {
    // eslint-disable-next-line no-restricted-globals
    const boolPrompt = confirm('Are you sure you want to close the window?');
    if (boolPrompt) {
      setActive(false);
      setmodalActivefForTablet(false);
    }
  };

  useEffect(() => {
    if (active) {
      document.body.classList.add(styles.bodyScroll);
      return;
    }
    document.body.classList.remove(styles.bodyScroll);
  }, [active]);

  return (
    <div
      className={styles.container + ' ' + (active ? styles.active : '')}
      onClick={onCloseModal}
      id={'container-modal'}
    >
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        {page === 1 && (
          <Modal1
            setActive={setActive}
            setActiveTablet={setmodalActivefForTablet}
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
            setActiveTablet={setmodalActivefForTablet}
            active={active}
            setModal2Values={setModal2Values}
            modalDefaultValues={modal2Values}
          />
        )}
        <button
          className={styles.button}
          onClick={() => {
            setActive(false);
            setmodalActivefForTablet(false);
          }}
        >
          <img className={styles.imgB} src={close} alt="close" />
        </button>
      </div>
    </div>
  );
}

export default ModalAddsPet;

ModalAddsPet.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
  setmodalActivefForTablet: PropTypes.func.isRequired,
};
