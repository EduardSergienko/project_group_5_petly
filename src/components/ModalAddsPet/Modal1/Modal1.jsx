import { useState, useEffect } from 'react';
import InputMask from 'react-input-mask';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import styles from './Modal1.module.scss';

function Modal1({
  setActive,
  setActiveTablet,
  setPage,
  createPetsPost,
  active,
  modalDefaultValues,
}) {
  const { t } = useTranslation();
  const [inputActiveName, setInputActiveName] = useState(true);
  const [inputActiveBirthday, setInputActiveBirthday] = useState(true);
  const [inputActiveBreed, setInputActiveBreed] = useState(true);
  const [nameValue, setNameValue] = useState(
    modalDefaultValues ? modalDefaultValues.name : ''
  );
  const [birthdayValue, setBirthdayValue] = useState(
    modalDefaultValues ? modalDefaultValues.birthday : ''
  );
  const [breedValue, setBreedValue] = useState(
    modalDefaultValues ? modalDefaultValues.breed : ''
  );
  const [required, setRequired] = useState(false);

  const handleInputChange = e => {
    const { name, value } = e.target;
    const valueToLower = value.toLowerCase().trim();
    const yearNow = new Date().getFullYear();

    switch (name) {
      case 'name':
        const pattern =
          /^[a-zA-Zа-яА-ЯЁёЇїІіЄєҐґ]+(([' -][a-zA-Zа-яА-ЯЁёЇїІіЄєҐґ ])?[a-zA-Zа-яА-ЯЁёЇїІіЄєҐґ]*)*$/;

        setInputActiveName(pattern.test(valueToLower));

        if (valueToLower.length < 2) {
          setInputActiveName(false);
        }

        if (valueToLower.length > 16) {
          setInputActiveName(false);
        }

        setNameValue(value);
        setRequired(false);
        break;

      case 'Date_of_birth':
        setInputActiveBirthday(
          /(0?[1-9]|[12][0-9]|3[01]).(0?[1-9]|1[012]).((20)\d\d)$/.test(
            valueToLower
          )
        );

        if (
          valueToLower.slice(6).length === 4 &&
          valueToLower.slice(6) > yearNow
        ) {
          setInputActiveBirthday(false);
        }

        setBirthdayValue(value);
        setRequired(false);
        break;

      case 'breed':
        setInputActiveBreed(
          /^[a-zA-Zа-яА-ЯЁёЇїІіЄєҐґ]+(([' -][a-zA-Zа-яА-ЯЁёЇїІіЄєҐґ ])?[a-zA-Zа-яА-ЯЁёЇїІіЄєҐґ]*)*$/.test(
            valueToLower
          )
        );

        if (valueToLower.length < 2) {
          setInputActiveBreed(false);
        }

        if (valueToLower.length > 16) {
          setInputActiveBreed(false);
        }

        setBreedValue(value);
        setRequired(false);
        break;

      default:
        return;
    }
  };

  const onClickCancelBtn = e => {
    e.preventDefault();

    setActive(false);
    setActiveTablet(false);
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
      <h2 className={styles.title}>{t('pet.addPet')}</h2>

      <form className={styles.form}>
        <label className={styles.lable}>
          <span className={styles.span}>{t('pet.namePet')}</span>
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
            placeholder={t('pet.namePlaceholder')}
            required
          />
          {!inputActiveName &&
            nameValue.length !== 0 &&
            nameValue.length < 2 && (
              <p className={styles.textError}>{t('pet.atLeast2')}</p>
            )}
          {!inputActiveName &&
            nameValue.length !== 0 &&
            nameValue.length > 16 && (
              <p className={styles.textError}>{t('pet.noMore16')}</p>
            )}
          {!inputActiveName &&
            nameValue.length > 2 &&
            nameValue.length < 16 && (
              <p className={styles.textError}>{t('pet.letters')}</p>
            )}
          {required && nameValue.length === 0 && (
            <p className={styles.textError}>{t('pet.required')}</p>
          )}
        </label>

        <label className={styles.lable}>
          <span className={styles.span}>{t('pet.birthDatePet')}</span>
          <InputMask
            className={`${styles.input} ${
              !inputActiveBirthday && birthdayValue.length !== 0
                ? styles.noValidate
                : ''
            }  ${
              required && birthdayValue.length === 0 ? styles.noValidate : ''
            }`}
            type="text"
            name="Date_of_birth"
            mask="99.99.9999"
            value={birthdayValue}
            onChange={handleInputChange}
            placeholder={t('pet.birthPlaceholder')}
            required
          />
          {!inputActiveBirthday && birthdayValue.length !== 0 && (
            <p className={styles.textError}>{t('pet.data')}</p>
          )}
          {required && birthdayValue.length === 0 && (
            <p className={styles.textError}>{t('pet.required')}</p>
          )}
        </label>

        <label className={styles.lable}>
          <span className={styles.span}>{t('pet.breed')}</span>
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
            placeholder={t('pet.breedPlaceholder')}
            required
          />
          {!inputActiveBreed &&
            breedValue.length !== 0 &&
            breedValue.length < 2 && (
              <p className={styles.textError}>{t('pet.atLeast2')}</p>
            )}
          {!inputActiveBreed &&
            breedValue.length !== 0 &&
            breedValue.length > 16 && (
              <p className={styles.textError}>{t('pet.noMore16')}</p>
            )}
          {!inputActiveBreed &&
            breedValue.length > 2 &&
            breedValue.length < 16 && (
              <p className={styles.textError}>{t('pet.letters')}</p>
            )}
          {required && breedValue.length === 0 && (
            <p className={styles.textError}>{t('pet.required')}</p>
          )}
        </label>

        <div className={styles.buttonContainer}>
          <button className={styles.cancel} onClick={onClickCancelBtn}>
            {t('pet.cancel')}
          </button>
          <button
            className={`${styles.next} ${
              inputActiveName &&
              inputActiveBirthday &&
              inputActiveBreed &&
              !required &&
              nameValue.length !== 0 &&
              birthdayValue.length !== 0 &&
              breedValue.length !== 0
                ? styles.valueTrue
                : ''
            }`}
            onClick={onClickNextBtn}
          >
            {t('pet.next')}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Modal1;

Modal1.propTypes = {
  setActive: PropTypes.func.isRequired,
  setActiveTablet: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
  createPetsPost: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  modalDefaultValues: PropTypes.shape({
    name: PropTypes.string.isRequired,
    birthday: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
  }),
};
