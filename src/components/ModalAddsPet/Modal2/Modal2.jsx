import { useState, useEffect } from 'react';

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

        setModal2Values(prevState => {
          return { ...prevState, comments: value };
        });
        setCommentsValue(value);
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
      <h2 className={styles.title}>Add pet</h2>
      <p className={styles.text}>Add photo and some comments</p>

      <form className={styles.form}>
        <div className={styles.field__wrapper}>
          <label className={styles.field__lable}>
            <input
              className={styles.field__file}
              type="file"
              name="file"
              accept="image/*, image/jpeg, image/jpg"
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
              <div className={`${styles.anyChoise}`}>Choise another photo</div>
            )}
            {required && !picture && (
              <p className={styles.textErrorPicture}>Please select a photo</p>
            )}
          </label>
        </div>

        <label className={styles.lable}>
          <span className={styles.span}>Comments</span>
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
            placeholder="Type comments"
            rows="5"
            required
          ></textarea>
          {!inputActiveComments &&
            commentsValue.length !== 0 &&
            commentsValue.length < 8 && (
              <p className={styles.textError}>Must be at least 8 characters</p>
            )}
          {!inputActiveComments &&
            commentsValue.length !== 0 &&
            commentsValue.length > 120 && (
              <p className={styles.textError}>No more than 120 characters</p>
            )}
          {required && commentsValue.length === 0 && (
            <p className={styles.textError}>Required</p>
          )}
        </label>

        <div className={styles.buttonContainer}>
          <button className={styles.cancel} onClick={onClickBackBtn}>
            Back
          </button>
          <button className={styles.next} onClick={onClickDoneBtn}>
            Done
          </button>
        </div>
      </form>
    </div>
  );
}

export default Modal2;
