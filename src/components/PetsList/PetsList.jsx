import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { authSelectors } from 'redux/auth';

import PetsListItem from '../PetsListItem/PetsListItem';
import Loader2 from '../Loader2/Loader2';
import leaf from '../../image/leaf.png';

import styles from './PetsList.module.scss';

function PetsList() {
  const { t } = useTranslation();

  const ownPosts = useSelector(authSelectors.getUserAnimal);
  const loading = useSelector(authSelectors.getCreateAnimalLoading);
  const [loader, setLoader] = useState(null);

  const activeLoader = id => {
    setLoader(id);
  };

  return (
    <>
      {loading && (
        <div className={styles.loaderContainer}>
          <Loader2 size={100} />
        </div>
      )}
      {!loading && ownPosts?.length === 0 ? (
        <div className={styles.containerImg}>
          <h2 className={styles.title}>{t('user.noPets')}</h2>
          <img className={styles.img} src={leaf} alt="leaf" />
        </div>
      ) : (
        !loading && (
          <ul className={styles.list}>
            {ownPosts?.map(
              ({ _id, birthDay, breed, comments, name, avatarURL }) => (
                <PetsListItem
                  key={_id}
                  id={_id}
                  birthday={birthDay}
                  breed={breed}
                  comments={comments}
                  name={name}
                  photo={avatarURL}
                  active={loader === _id}
                  activeLoader={activeLoader}
                />
              )
            )}
          </ul>
        )
      )}
    </>
  );
}

export default PetsList;
