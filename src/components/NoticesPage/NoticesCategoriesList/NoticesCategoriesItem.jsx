import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { noticesOperations } from 'redux/notices';
import { useTranslation } from 'react-i18next';
import { authSelectors } from '../../../redux/auth';
import notices from 'helpers/Notification/Notification';
import { DeleteButton } from '../../../helpers';

import { ReactComponent as AddToFavorite } from '../../../image/svg/addToFavorite.svg';
import noPhoto from '../../../image/noPhoto.png';

import styles from './NoticesCategoriesList.module.scss';

function NoticesCategoriesItem({ item, setActive, categoryName }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const myFavoriteIds = useSelector(authSelectors.getUserFavorite);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    isLoggedIn && setIsFavorite(myFavoriteIds.some(i => i === item?._id));
  }, [item, myFavoriteIds, isLoggedIn]);

  useEffect(() => {
    categoryName === 'favorite' && setIsFavorite(true);
  }, [categoryName]);

  const addFavorite = e => {
    if (!isLoggedIn) {
      return notices.showError(
        'You need to authorize before adding notices to favorite.'
      );
    }
    e.currentTarget.style.fill = '#f59256';
    dispatch(noticesOperations.addToFavorite(item?._id));
    setIsFavorite(true);

    notices.showSuccess('Notice added to favorite adds.');
  };

  const removeFavorite = e => {
    if (!isLoggedIn) {
      return notices.showError(
        'You need to authorize before remove notices from favorite.'
      );
    }
    e.currentTarget.style.fill = 'none';
    dispatch(noticesOperations.removeFavorite(item?._id));
    setIsFavorite(false);

    notices.showSuccess('Notice removed from favorite adds.');
  };

  const normalizeCategoryName = name => {
    let category;

    switch (name) {
      case 'sell':
        category = 'Sell';
        break;
      case 'for-free':
        category = 'In good hands';
        break;
      case 'lost-found':
        category = 'Lost/found';
        break;
      default:
        category = '';
    }

    return category;
  };

  const handleDeleteItem = id => {
    dispatch(noticesOperations.deleteUserNotice(id));
  };

  const cutTitle = title => {
    if (title.length > 17) {
      return title.slice(0, 15) + '...';
    } else {
      return title;
    }
  };

  return (
    <div className={styles.item} key={item?._id}>
      <div className={styles.imgWrapper}>
        <img
          src={item?.petImageUrl}
          alt="Pet"
          className={styles.img}
          onError={e => {
            e.target.src = noPhoto;
          }}
        />
      </div>
      <p className={styles.itemCategory}>
        {normalizeCategoryName(item?.category)}
      </p>
      {!isFavorite && (
        <AddToFavorite className={styles.addToFavorite} onClick={addFavorite} />
      )}
      {isFavorite && (
        <AddToFavorite
          className={styles.removeFavorite}
          onClick={removeFavorite}
        />
      )}

      {categoryName === 'own' && (
        <DeleteButton
          stylesBtn={styles.deleteButton}
          onClick={handleDeleteItem}
          id={item?._id}
        />
      )}

      <div className={styles.itemInfoWrap}>
        <h3
          className={styles.itemHeader}
          onClick={e => {
            e.preventDefault();
            setActive(true);
            dispatch(noticesOperations.getOneNotice(item?._id));
          }}
        >
          {item?.title}
        </h3>
        <div
          className={`${styles.itemDescriptionWrapper} ${
            item?.price && styles.priceItemDescriptionWrapper
          }`}
        >
          <div className={styles.itemDescriptionConteiner}>
            <p className={styles.itemDescription}>Breed:</p>
            <p className={styles.itemDescription}>Place:</p>
            <p className={styles.itemDescription}>Birth date:</p>
            {item?.price && <p className={styles.itemDescription}>Price:</p>}
          </div>
          <div className={styles.itemDescriptionConteiner}>
            {item?.breed && (
              <p className={styles.itemDescription}>{cutTitle(item?.breed)}</p>
            )}

            <p className={styles.itemDescription}>{cutTitle(item?.location)}</p>
            {item?.birthDate && (
              <p className={styles.itemDescription}>{item?.birthDate}</p>
            )}

            {item?.price && (
              <p className={styles.itemDescription}>{`${item?.price}$`}</p>
            )}
          </div>
        </div>
        <button
          className={styles.itemButton}
          onClick={e => {
            e.preventDefault();
            setActive(true);
            dispatch(noticesOperations.getOneNotice(item?._id));
          }}
        >
          {t('findpet.more')}
        </button>
      </div>
    </div>
  );
}

export default NoticesCategoriesItem;
