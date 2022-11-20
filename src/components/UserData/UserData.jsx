import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import UserDataItem from './UserDataItem/UserDataItem';

import { authSelectors } from '../../redux/auth';
import { userOperations } from '../../redux/user';

import camera from '../../image/camera.png';
import doneVector from '../../image/doneVector.png';

import styles from './UserData.module.scss';

function UserData() {
  const user = useSelector(authSelectors.getUser);
  const dispatch = useDispatch();
  const [picture, setPicture] = useState('');
  const [selectPicture, setSelectPicture] = useState('');
  const [active, setActive] = useState(true);

  const boolButton = e => {
    e.preventDefault();

    if (active === true) {
      setActive(false);
      return;
    }

    setActive(true);
  };

  const handleChange = e => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      reader.onloadend = () => {
        const base64data = reader.result;
        setSelectPicture(base64data);
      };
    }

    const formData = new FormData();
    formData.append('avatar', e.target.files[0]);
    const data = {
      id: user.id,
      value: formData,
    };
    dispatch(userOperations.updateUserInformation({ data }));
  };

  useEffect(() => {
    if (user?.avatarURL?.search('gravatar') !== -1 && !selectPicture) {
      setSelectPicture(user?.avatarURL);
      return;
    }

    if (
      user?.avatarURL?.search('gravatar') === -1 &&
      user?.avatarURL?.search('avatars') !== -1
    ) {
      // setPicture(user?.avatarURL.split('public')[1]);
      setPicture(user?.avatarURL);
    }
  }, [selectPicture, user]);

  const updateUser = value => {
    const data = {
      id: user.id,
      value,
    };
    dispatch(userOperations.updateUserInformation({ data }));
  };

  return (
    <form id="form" encType="multipart/form-data" className={styles.form}>
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
            disabled={active}
          />
          <div
            className={`${styles.field__fake} ${
              !active && (!picture || !selectPicture) ? styles.pointer : ''
            }`}
          >
            {picture || selectPicture ? (
              <img
                className={styles.image}
                src={
                  picture && !selectPicture
                    ? `https://fetch-friend.herokuapp.com/${picture}`
                    : selectPicture
                }
                alt="avatar"
              />
            ) : active ? (
              'Upload your photo'
            ) : (
              'Choise your photo'
            )}
          </div>
          {(picture || selectPicture) && !active && (
            <div className={`${styles.anyChoise}`}>Choise your photo</div>
          )}
        </label>
        <button
          className={`${styles.buttonPhoto} ${active ? '' : styles.buttonDone}`}
          onClick={boolButton}
        >
          {active ? (
            <>
              <img className={styles.imageCamera} src={camera} alt="camera" />
              Edit photo
            </>
          ) : (
            <img
              className={styles.imageDone}
              src={doneVector}
              alt="doneVector"
            ></img>
          )}
        </button>
      </div>

      <ul className={styles.list}>
        <UserDataItem
          updateUser={updateUser}
          title={'Name'}
          pattern={/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/}
          type={'text'}
          name={'name'}
          placeholder={'Name'}
          min={2}
          max={48}
          required={true}
          example={'Anna Lokerman'}
          defaultVaule={user?.name}
        />
        <UserDataItem
          updateUser={updateUser}
          title={'Email'}
          pattern={
            /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/
          }
          type={'email'}
          name={'email'}
          placeholder={'Your email'}
          example={'example@gmail.com'}
          defaultVaule={user?.email}
          required={true}
        />
        <UserDataItem
          updateUser={updateUser}
          title={'Birthday'}
          pattern={/(0?[1-9]|[12][0-9]|3[01]).(0?[1-9]|1[012]).((19|20)\d\d)$/}
          type={'text'}
          name={'dateOfBirth'}
          placeholder={'Your birthday'}
          example={'DD.MM.YYYY'}
          mask={'99.99.9999'}
          defaultVaule={user?.dateOfBirth}
        />
        <UserDataItem
          updateUser={updateUser}
          title={'Phone'}
          pattern={/^[+]{0,1}380([0-9]{9})$/}
          type={'phone'}
          name={'phone'}
          placeholder={'Your phone'}
          example={'+38000000000'}
          mask={'+380999999999'}
          defaultVaule={user?.phone}
          required={true}
        />
        <UserDataItem
          updateUser={updateUser}
          title={'City'}
          pattern={/^[а-яА-ЯёЁa-zA-Z]+$/}
          type={'text'}
          name={'location'}
          placeholder={'Your city'}
          example={'Kyiv'}
          min={2}
          max={48}
          defaultVaule={user?.location}
        />
      </ul>
    </form>
  );
}

export default UserData;
