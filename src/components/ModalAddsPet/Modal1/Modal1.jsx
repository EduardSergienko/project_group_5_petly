import { useState, useEffect } from 'react';

import styles from './Modal1.module.scss';

function Modal1({ setActive, setPage, createPetsPost, active }) {
  const [inputActiveName, setInputActiveName] = useState(true);
  const [inputActiveBirthday, setInputActiveBirthday] = useState(true);
  const [inputActiveBreed, setInputActiveBreed] = useState(true);
  const [nameValue, setNameValue] = useState('');
  const [birthdayValue, setBirthdayValue] = useState('');
  const [breedValue, setBreedValue] = useState('');
  const [required, setRequired] = useState(false);

  const handleInputChange = e => {
    const { name, value } = e.target;
    const valueToLower = value.toLowerCase();

    switch (name) {
      case 'name':
        const pattern =
          /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

        setInputActiveName(pattern.test(valueToLower));

        if (value.length < 2) {
          setInputActiveName(false);
        }

        if (value.length > 16) {
          setInputActiveName(false);
        }

        setNameValue(value);
        break;

      case 'Date_of_birth':
        setInputActiveBirthday(
          /(0?[1-9]|[12][0-9]|3[01]).(0?[1-9]|1[012]).((19|20)\d\d)$/.test(
            valueToLower
          )
        );

        setBirthdayValue(value);
        break;

      case 'breed':
        setInputActiveBreed(
          /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/.test(
            valueToLower
          )
        );

        if (value.length < 2) {
          setInputActiveBreed(false);
        }

        if (value.length > 16) {
          setInputActiveBreed(false);
        }

        setBreedValue(value);
        break;

      default:
        return;
    }
  };

  const onClickCancelBtn = e => {
    e.preventDefault();

    setActive(false);
    setRequired(false);
    setNameValue('');
    setBirthdayValue('');
    setBreedValue('');
  };

  const onClickNextBtn = e => {
    e.preventDefault();

    if (nameValue.length < 2 || nameValue.length > 16) {
      setInputActiveName(false);
      setRequired(true);
      return;
    }

    if (!inputActiveName) {
      return;
    }

    if (birthdayValue.length === 0) {
      setInputActiveBirthday(false);
      setRequired(true);
      return;
    }

    if (!inputActiveBirthday) {
      return;
    }

    if (breedValue.length < 2 || breedValue.length > 16) {
      setInputActiveBreed(false);
      setRequired(true);
      return;
    }

    if (!inputActiveBreed) {
      return;
    }

    const data = {
      name: nameValue,
      birthday: birthdayValue,
      breed: breedValue,
    };

    createPetsPost(data);
    setPage(2);
  };

  useEffect(() => {
    if (!active) {
      setRequired(false);
      setNameValue('');
      setBirthdayValue('');
      setBreedValue('');
    }
  }, [active]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Add pet</h2>

      <form className={styles.form}>
        <label className={styles.lable}>
          <span className={styles.span}>Name pet</span>
          <input
            className={`${styles.input} ${
              !inputActiveName && nameValue.length !== 0
                ? styles.noValidate
                : ''
            } ${required && nameValue.length === 0 ? styles.noValidate : ''}`}
            type="text"
            name="name"
            value={nameValue}
            onChange={handleInputChange}
            placeholder="Type name pet"
            required
          />
          {!inputActiveName &&
            nameValue.length !== 0 &&
            nameValue.length < 2 && (
              <p className={styles.textError}>Must be at least 2 characters</p>
            )}
          {!inputActiveName &&
            nameValue.length !== 0 &&
            nameValue.length > 16 && (
              <p className={styles.textError}>No more than 16 characters</p>
            )}
          {required && nameValue.length === 0 && (
            <p className={styles.textError}>Required</p>
          )}
        </label>

        <label className={styles.lable}>
          <span className={styles.span}>Date of birth</span>
          <input
            className={`${styles.input} ${
              !inputActiveBirthday && birthdayValue.length !== 0
                ? styles.noValidate
                : ''
            }  ${
              required && birthdayValue.length === 0 ? styles.noValidate : ''
            }`}
            type="text"
            name="Date_of_birth"
            value={birthdayValue}
            onChange={handleInputChange}
            placeholder="Type date of birth"
            required
          />
          {!inputActiveBirthday && birthdayValue.length !== 0 && (
            <p className={styles.textError}>DD.MM.YYYY</p>
          )}
          {required && birthdayValue.length === 0 && (
            <p className={styles.textError}>Required</p>
          )}
        </label>

        <label className={styles.lable}>
          <span className={styles.span}>Breed</span>
          <input
            className={`${styles.input} ${
              !inputActiveBreed && breedValue.length !== 0
                ? styles.noValidate
                : ''
            }  ${required && breedValue.length === 0 ? styles.noValidate : ''}`}
            type="text"
            name="breed"
            value={breedValue}
            onChange={handleInputChange}
            placeholder="Type breed"
            required
          />
          {!inputActiveBreed &&
            breedValue.length !== 0 &&
            breedValue.length < 2 && (
              <p className={styles.textError}>Must be at least 2 characters</p>
            )}
          {!inputActiveName &&
            breedValue.length !== 0 &&
            breedValue.length > 16 && (
              <p className={styles.textError}>No more than 16 characters</p>
            )}
          {required && breedValue.length === 0 && (
            <p className={styles.textError}>Required</p>
          )}
        </label>

        <div className={styles.buttonContainer}>
          <button className={styles.cancel} onClick={onClickCancelBtn}>
            Cancel
          </button>
          <button className={styles.next} onClick={onClickNextBtn}>
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default Modal1;
