import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import fotoSelect from '../../../image/svg/fotoSelect.svg';

import styles from './Modal2.module.scss';

function Modal2({
  setPage,
  createPetsPost,
  setActive,
  setActiveTablet,
  active,
  setModal2Values,
  modalDefaultValues,
}) {
  const { t } = useTranslation();
  const [inputActiveComments, setInputActiveComments] = useState(true);
  const [commentsValue, setCommentsValue] = useState(
    modalDefaultValues ? modalDefaultValues.comments : ''
  );
  const [required, setRequired] = useState(false);
  const [fileValue, setFileValue] = useState([]);
  const [picture, setPicture] = useState(
    modalDefaultValues ? modalDefaultValues.photo : ''
  );

  const handleInputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'comments':
        if (value.length < 8) {
          setInputActiveComments(false);
        }

        if (value.length > 120) {
          setInputActiveComments(false);
        }

        if (value.length >= 8 && value.length <= 120) {
          setInputActiveComments(true);
        }

        setModal2Values(prevState => {
          return { ...prevState, comments: value };
        });
        setCommentsValue(value);
        setRequired(false);
        break;

      default:
        return;
    }
  };

  const onClickBackBtn = e => {
    e.preventDefault();

    setPage(1);
  };

  const onClickDoneBtn = e => {
    e.preventDefault();

    if (!picture) {
      setRequired(true);
      return;
    }

    if (commentsValue.length < 8 || commentsValue.length > 120) {
      setInputActiveComments(false);
      setRequired(true);
      return;
    }

    const data = {
      comments: commentsValue,
      file: fileValue,
    };

    createPetsPost(data);
    setActive(false);
    setActiveTablet(false);
  };

  const handleChange = e => {
    setFileValue(e.target.files[0]);

    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      reader.onloadend = () => {
        const base64data = reader.result;
        setPicture(base64data);
        setModal2Values(prevState => {
          return { ...prevState, photo: base64data };
        });
      };
    }
  };

  useEffect(() => {
    if (!active) {
      setRequired(false);
      setFileValue([]);

      setModal2Values({ comments: '', photo: '' });
    }
  }, [active, setModal2Values]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{t('pet.addPet')}</h2>
      <p className={styles.text}>{t('pet.addPhotoComments')}</p>

      <form className={styles.form}>
        <div className={styles.field__wrapper}>
          <label className={styles.field__lable}>
            <input
              className={styles.field__file}
              type="file"
              name="file"
              accept=".jpg, .jpeg, .png"
              required
              multiple
              onChange={handleChange}
            />
            <div
              className={`${styles.field__fake} ${
                !picture ? styles.pointer : ''
              }`}
            >
              {picture ? (
                <img
                  className={styles.image}
                  src={picture}
                  alt={fileValue?.name}
                />
              ) : (
                <img
                  className={styles.fotoSelect}
                  src={fotoSelect}
                  alt="fotoSelect"
                ></img>
              )}
            </div>
            {picture && (
              <div className={`${styles.anyChoise}`}>
                {t('pet.choisePhoto')}
              </div>
            )}
            {required && !picture && (
              <p className={styles.textErrorPicture}> {t('pet.selectPhoto')}</p>
            )}
          </label>
        </div>

        <label className={styles.lable}>
          <span className={styles.span}>{t('pet.comments')}</span>
          <textarea
            className={`${styles.input} ${
              !inputActiveComments &&
              commentsValue.length !== 0 &&
              commentsValue.length < 8
                ? styles.noValidate
                : ''
            } 
            ${
              !inputActiveComments &&
              commentsValue.length !== 0 &&
              commentsValue.length > 120
                ? styles.noValidate
                : ''
            } ${
              required && commentsValue.length === 0 ? styles.noValidate : ''
            }`}
            name="comments"
            value={commentsValue}
            onChange={handleInputChange}
            placeholder={t('pet.commentsPlaceholder')}
            rows="5"
            required
          ></textarea>
          {!inputActiveComments &&
            commentsValue.length !== 0 &&
            commentsValue.length < 8 && (
              <p className={styles.textError}>{t('pet.atLeast8')}</p>
            )}
          {!inputActiveComments &&
            commentsValue.length !== 0 &&
            commentsValue.length > 120 && (
              <p className={styles.textError}>{t('pet.noMore120')}</p>
            )}
          {required && commentsValue.length === 0 && (
            <p className={styles.textError}>{t('pet.required')}</p>
          )}
        </label>

        <div className={styles.buttonContainer}>
          <button className={styles.cancel} onClick={onClickBackBtn}>
            {t('pet.back')}
          </button>
          <button
            className={`${styles.next} ${
              inputActiveComments &&
              picture &&
              !required &&
              commentsValue.length !== 0
                ? styles.valueTrue
                : ''
            }`}
            onClick={onClickDoneBtn}
          >
            {t('pet.done')}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Modal2;

Modal2.propTypes = {
  setActive: PropTypes.func.isRequired,
  setActiveTablet: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
  createPetsPost: PropTypes.func.isRequired,
  setModal2Values: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  modalDefaultValues: PropTypes.shape({
    comments: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }),
};
