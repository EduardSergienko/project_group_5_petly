import { useState } from 'react';
import { useDispatch } from 'react-redux';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import { noticesOperations } from 'redux/notices';
import styles from './ModalAddNotice.module.scss';

const ModalAddNotice = ({ isModalOpen, setIsModalOpen }) => {
  const [page, setPage] = useState(0);
  const [firstStepValues, setFirstStepValues] = useState({
    category: '',
    title: '',
    name: '',
    birthDate: '',
    breed: '',
  });
  const [secondStepValues, setSecondStepValues] = useState({
    sex: '',
    location: '',
    price: '',
    avatar: [],
    comments: '',
  });
  const [fileValue, setFileValue] = useState('');
  const dispatch = useDispatch();

  const handleFirstStepSubmit = evt => {
    evt.preventDefault();
    setPage(prevPage => prevPage + 1);
  };

  const handleSecondStepSubmit = evt => {
    evt.preventDefault();

    const formData = new FormData();

    formData.append('category', firstStepValues.category);
    formData.append('title', firstStepValues.title);
    formData.append('petName', firstStepValues.name);
    formData.append('birthDate', firstStepValues.birthDate);
    formData.append('breed', firstStepValues.breed);
    formData.append('sex', secondStepValues.sex);
    formData.append('location', secondStepValues.location);
    formData.append('avatar', secondStepValues.avatar);
    formData.append('comments', secondStepValues.comments);
    formData.append('price', Number(secondStepValues.price));

    dispatch(noticesOperations.addNotice(formData));
  };

  const handleBackToFirst = evt => {
    evt.preventDefault();
    setPage(prevPage => prevPage - 1);
  };

  const handleAddAvatar = evt => {
    const [file] = evt.target.files;

    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = evt => {
        const base64data = reader.result;
        setFileValue(base64data);
        setSecondStepValues(prevState => {
          return { ...prevState, avatar: file };
        });
      };
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={styles.formWrap}>
        <h1 className={`${styles.title} ${page === 1 && styles.secStepTitle}`}>
          Add pet
        </h1>
        {page === 0 ? (
          <FirstStep
            handleFirstStepSubmit={handleFirstStepSubmit}
            firstStepValues={firstStepValues}
            setFirstStepValues={setFirstStepValues}
            handleModalClose={handleModalClose}
          />
        ) : (
          <SecondStep
            handleBackToFirst={handleBackToFirst}
            secondStepValues={secondStepValues}
            setSecondStepValues={setSecondStepValues}
            handleAddAvatar={handleAddAvatar}
            file={fileValue}
            handleSecondStepSubmit={handleSecondStepSubmit}
          />
        )}
        <button className={styles.closeBtn} onClick={handleModalClose}></button>
      </div>
      <div className={styles.container} onClick={handleModalClose}></div>
    </>
  );
};

export default ModalAddNotice;
