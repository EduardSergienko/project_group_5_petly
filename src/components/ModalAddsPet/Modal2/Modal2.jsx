import { useState } from 'react';

import fotoSelect from '../../../image/svg/fotoSelect.svg';

import styles from './Modal2.module.scss';

function Modal2({ setPage }) {
  const [inputActiveComments, setInputActiveComments] = useState(true);
  const [commentsValue, setCommentsValue] = useState('');
  const [required, setRequired] = useState(false);

  const [fileValue, setFileValue] = useState([]);
  const [picture, setPicture] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.target;
    const valueToLower = value.toLowerCase();

    switch (name) {
      case 'name':
        const pattern =
          /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

        setInputActiveComments(pattern.test(valueToLower));

        if (value.length < 8) {
          setInputActiveComments(false);
        }

        if (value.length > 120) {
          setInputActiveComments(false);
        }

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
      return;
    }

    if (commentsValue.length === 0) {
      //   setInputActiveName(false);
      setRequired(true);
      return;
    }

    // if (breedValue.length === 0) {
    //   setInputActiveName(false);
    //   setRequired(true);
    //   return;
    // }
  };

  const handleChange = e => {
    setFileValue(e.target.files[0]);

    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      reader.onloadend = () => {
        const base64data = reader.result;
        setPicture(base64data);
      };
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Add pet</h2>

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
              <div className={`${styles.anyChoise}`}>Choose another photo</div>
            )}
          </label>
        </div>

        <label className={styles.lable}>
          <span className={styles.span}>Comments</span>
          <textarea
            className={`${styles.input} ${
              !inputActiveComments && commentsValue.length !== 0
                ? styles.noValidate
                : ''
            }  ${
              required && commentsValue.length === 0 ? styles.noValidate : ''
            }`}
            name="comments"
            // value={commentsValue}
            // onChange={handleInputChange}
            placeholder="Type comments"
            rows="5"
            required
          ></textarea>
          {!inputActiveComments && commentsValue.length !== 0 && (
            <p className={styles.textError}>Breed of your pet</p>
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
