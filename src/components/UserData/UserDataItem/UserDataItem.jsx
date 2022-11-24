import { useState, useEffect } from 'react';
import InputMask from 'react-input-mask';
import PropTypes from 'prop-types';

import PlacesAutocomplete from './PlacesAutocomplete/PlacesAutocomplete';

import doneVector from '../../../image/doneVector.png';
import edit from '../../../image/edit.png';

import styles from './UserDataItem.module.scss';

function UserDataItem({
  updateUser,
  title,
  pattern,
  type,
  placeholder,
  min,
  max,
  required,
  example,
  defaultVaule,
  name,
  mask,
}) {
  const [active, setActive] = useState(false);
  const [inputeValue, setInputeValue] = useState(defaultVaule ?? '');
  const [inputActive, setInputActive] = useState(true);

  useEffect(() => {
    if (defaultVaule) {
      setInputeValue(defaultVaule);
    }
  }, [defaultVaule]);

  const handleClick = e => {
    e.preventDefault();
    if (active === true && (inputeValue.length !== 0 || !required)) {
      setActive(false);
      const data = {
        [name]: inputeValue,
      };
      updateUser(data);
      return;
    }

    setActive(true);
  };

  const onInputeChange = e => {
    const value = e.target.value.toLowerCase().trim();
    const yearNow = new Date().getFullYear();
    setInputActive(pattern.test(value));

    if (value.slice(6).length === 4 && value.slice(6) > yearNow) {
      setInputActive(false);
    }

    if (value.length < min) {
      setInputActive(false);
    }

    if (value.length > max) {
      setInputActive(false);
    }

    setInputeValue(e.target.value);
  };

  return (
    <li className={styles.container}>
      <p className={styles.title}>{title}:</p>
      {active ? (
        <label className={styles.lable}>
          {name === 'location' ? (
            <PlacesAutocomplete
              style={styles.input}
              noValidate={styles.noValidate}
              styleLi={styles.styleLi}
              styleUl={styles.styleUl}
              stylesDiv={styles.stylesDiv}
              span={styles.spanStyles}
              setInputActive={setInputActive}
              min={min}
              max={max}
              inputeValue={inputeValue}
              setInputeValue={setInputeValue}
              inputActive={inputActive}
            />
          ) : (
            <InputMask
              className={`${styles.input} ${
                !inputActive && inputeValue.length !== 0
                  ? styles.noValidate
                  : ''
              }`}
              type={type}
              name={name}
              mask={mask}
              value={inputeValue}
              onChange={onInputeChange}
              pattern={pattern}
              placeholder={placeholder}
            />
          )}

          {min &&
            !inputActive &&
            inputeValue.length < min &&
            inputeValue.length !== 0 && (
              <p className={styles.textError}>
                Must be at least {min} characters
              </p>
            )}
          {max && !inputActive && inputeValue.length > max && (
            <p className={styles.textError}> No more than {max} characters</p>
          )}
          {!min && !max && !inputActive && inputeValue.length !== 0 && (
            <p className={styles.textError}>{example}</p>
          )}
          {!inputActive &&
            inputeValue.length < max &&
            inputeValue.length > min && (
              <p className={styles.textError}>Only letters</p>
            )}
          {required && inputeValue.length === 0 && (
            <p className={styles.textError}>Required</p>
          )}
        </label>
      ) : (
        <span
          className={`${styles.span} ${
            inputeValue.length === 0 && styles.spanDefault
          }`}
        >
          {inputeValue}
        </span>
      )}
      <button
        className={styles.button}
        onClick={handleClick}
        disabled={!inputActive && inputeValue.length !== 0}
      >
        <img
          className={styles.doneVector}
          src={active ? doneVector : edit}
          alt={`${active ? 'doneVector' : 'edit'}`}
        />
      </button>
    </li>
  );
}

export default UserDataItem;

UserDataItem.propTypes = {
  updateUser: PropTypes.func.isRequired,
  title: PropTypes.string,
  pattern: PropTypes.object,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  required: PropTypes.bool,
  example: PropTypes.string,
  defaultVaule: PropTypes.string,
  name: PropTypes.string,
  mask: PropTypes.string,
};
