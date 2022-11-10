import { useState } from 'react';

import doneVector from '../../../image/doneVector.png';
import edit from '../../../image/edit.png';

import styles from './UserDataItem.module.scss';

function UserDataItem({
  title,
  pattern,
  type,
  placeholder,
  min,
  max,
  required,
  example,
  defaultVaule,
}) {
  const [active, setActive] = useState(false);
  const [inputeValue, setInputeValue] = useState(defaultVaule ?? '');
  const [inputActive, setInputActive] = useState(false);

  const handleClick = () => {
    if (active === true && (inputeValue.length !== 0 || !required)) {
      setActive(false);
      return;
    }

    setActive(true);
  };

  const onInputeChange = e => {
    const value = e.target.value.toLowerCase();
    setInputActive(pattern.test(value));

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
          <input
            className={`${styles.input} ${
              !inputActive && inputeValue.length !== 0 ? styles.noValidate : ''
            }`}
            type={type}
            name={title}
            value={inputeValue}
            onChange={onInputeChange}
            pattern={pattern}
            placeholder={placeholder}
          />
          {!inputActive && inputeValue.length !== 0 && (
            <p className={styles.textError}>{example}</p>
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
