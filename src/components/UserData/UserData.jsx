import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import UserDataItem from './UserDataItem/UserDataItem';

import { authSelectors } from '../../redux/auth';
import { userOperations } from '../../redux/user';

import camera from '../../image/camera.png';
import doneVector from '../../image/doneVector.png';
import noUser from '../../image/noUser.png';

import styles from './UserData.module.scss';

function UserData() {
  const { t } = useTranslation();
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
      user?.avatarURL?.search('image') !== -1
    ) {
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
                src={picture && !selectPicture ? picture : selectPicture}
                alt="avatar"
                onError={e => {
                  e.target.src = noUser;
                }}
              />
            ) : active ? (
              t('user.uploadFoto')
            ) : (
              t('user.choisePhoto')
            )}
          </div>
          {(picture || selectPicture) && !active && (
            <div className={`${styles.anyChoise}`}>{t('user.choisePhoto')}</div>
          )}
        </label>
        <button
          className={`${styles.buttonPhoto} ${active ? '' : styles.buttonDone}`}
          onClick={boolButton}
        >
          {active ? (
            <>
              <img className={styles.imageCamera} src={camera} alt="camera" />
              {t('user.editPhoto')}
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
          title={t('user.name')}
          pattern={
            /^[a-zA-Zа-яА-ЯА-ЯЁёЇїІіЄєҐґ]+(([' -][a-zA-Zа-яА-ЯЁёЇїІіЄєҐґ ])?[a-zA-Zа-яА-ЯЁёЇїІіЄєҐґ]*)*$/
          }
          type={'text'}
          name={'name'}
          placeholder={'Name'}
          min={2}
          max={16}
          required={true}
          example={'Anna Lokerman'}
          defaultVaule={user?.name}
        />
        <UserDataItem
          updateUser={updateUser}
          title={t('user.email')}
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
          title={t('user.birthday')}
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
          title={t('user.phone')}
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
          title={t('user.city')}
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
