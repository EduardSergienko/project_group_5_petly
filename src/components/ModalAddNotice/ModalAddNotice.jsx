import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import { noticesOperations } from 'redux/notices';
import styles from './ModalAddNotice.module.scss';

const ModalAddNotice = ({ setIsModalOpen }) => {
  const [page, setPage] = useState(0);
  const [firstStepValues, setFirstStepValues] = useState({
    category: 'sell',
    title: '',
    name: '',
    birthDate: '',
    breed: '',
  });
  console.log(firstStepValues);
  const [secondStepValues, setSecondStepValues] = useState({
    sex: '',
    location: '',
    price: '',
    avatar: '',
    comments: '',
  });
  const [fileValue, setFileValue] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        setIsModalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setIsModalOpen]);

  const handleFirstStepSubmit = values => {
    setFirstStepValues(values);
    setPage(prevPage => prevPage + 1);
  };

  const handleSecondStepSubmit = values => {
    const { comments, avatar, price, location, sex } = values;
    const formData = new FormData();

    formData.append('category', firstStepValues.category);
    formData.append('title', firstStepValues.title);
    formData.append('petName', firstStepValues.name);
    formData.append('breed', firstStepValues.breed || '-');
    formData.append('sex', sex);
    formData.append('location', location);
    formData.append('avatar', avatar);
    formData.append('comments', comments);
    if (firstStepValues.category === 'sell') {
      formData.append('price', Number(price));
      formData.append('birthDate', firstStepValues.birthDate);
    } else if (firstStepValues.category === 'for-free') {
      formData.append('birthDate', firstStepValues.birthDate);
    }

    dispatch(noticesOperations.addNotice(formData));
  };

  const handleBackToFirst = values => {
    setSecondStepValues(values);
    setPage(prevPage => prevPage - 1);
  };

  const handleAddAvatar = (evt, setFieldValue) => {
    const [file] = evt.target.files;
    const reader = new FileReader();
    if (file) {
      setFieldValue('avatar', file);
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

  const handleModalClose = evt => {
    if (evt.currentTarget === evt.target) {
      setIsModalOpen(false);
    }
  };

  const handleDateValidation = value => {
    if (!value) {
      return;
    }
    let result;
    const [day, month, year] = value.split('.');

    if (day) {
      result = Number(day) > 31 ? false : true;
    }
    if (month) {
      result = Number(month) > 12 ? false : true;
    }

    if (year) {
      result =
        new Date(`${month}-${day}-${year}`).getTime() > Date.now()
          ? false
          : true;
    }
    return result;
  };
  const verifyCategoty = value => {
    return value === 'sell' || value === 'for-free';
  };
  return (
    <div className={styles.container} onClick={handleModalClose}>
      <div className={styles.modalWrapper}>
        <div className={styles.formWrap}>
          <h2 className={`${styles.title}`}>Add pet</h2>
          {page === 0 ? (
            <FirstStep
              handleFirstStepSubmit={handleFirstStepSubmit}
              firstStepValues={firstStepValues}
              setFirstStepValues={setFirstStepValues}
              handleModalClose={handleModalClose}
              handleDateValidation={handleDateValidation}
              verifyCategoty={verifyCategoty}
            />
          ) : (
            <SecondStep
              handleBackToFirst={handleBackToFirst}
              secondStepValues={secondStepValues}
              handleAddAvatar={handleAddAvatar}
              file={fileValue}
              handleSecondStepSubmit={handleSecondStepSubmit}
              checkCategory={firstStepValues.category}
              verifyCategoty={verifyCategoty}
            />
          )}
          <button
            className={styles.closeBtn}
            onClick={handleModalClose}
          ></button>
        </div>
      </div>
    </div>
  );
};

ModalAddNotice.propTypes = {
  setIsModalOpen: PropTypes.func.isRequired,
};

export default ModalAddNotice;
