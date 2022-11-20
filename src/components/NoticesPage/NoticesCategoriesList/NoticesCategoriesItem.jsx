import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as AddToFavorite } from '../../../image/svg/addToFavorite.svg';
import { Store } from 'react-notifications-component';
import styles from './NoticesCategoriesList.module.scss';
import { noticesOperations } from 'redux/notices';
import { useEffect } from 'react';
import { useState } from 'react';

function NoticesCategoriesItem({ item }) {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const myFavorite = useSelector(state => state.notices.myFavorite)
  const [isFavorite, setIsFavorite] = useState(false);
  
  useEffect(() => {
    setIsFavorite(myFavorite.some(i => i._id === item._id))
  }, [myFavorite, item._id,isFavorite])

  const addFavorite = (e) => {
    e.preventDefault()
    if (!isLoggedIn) {
      Store.addNotification({
        title: "Attention!",
        message: "You need to authorize before adding notices to favorite.",
        type: "warning",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      });
      return
    } 
    e.currentTarget.style.fill = '#f59256';
    dispatch(noticesOperations.addToFavorite(item._id))
    Store.addNotification({
        title: "",
        message: "Pet added to favorite adds.",
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      });
  };

  const removeFavorite = (e) => {
    e.preventDefault()
    if (!isLoggedIn) {
      Store.addNotification({
        title: "Attention!",
        message: "You need to authorize before adding notices to favorite.",
        type: "warning",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      });
      return
    } 
    e.currentTarget.style.fill = 'none';
    dispatch(noticesOperations.removeFavorite(item._id))
    Store.addNotification({
        title: "",
        message: "Pet removed from favorite adds.",
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      });
  };

  return (
    <div className={styles.item} key={item._id}>
      <div className={styles.imgWrapper}>
        <img src={item.petImageUrl} alt='Pet' className={styles.img}/>
      </div>
      <p className={styles.itemCategory}>In good hands</p>
      {!isFavorite && <AddToFavorite className={styles.addToFavorite} onClick={ addFavorite } />}
      {isFavorite && <AddToFavorite className={styles.removeFavorite} onClick={ removeFavorite } />}
      <h3 className={styles.itemHeader}>{ item.title }</h3>
      <div className={styles.itemDescriptionWrapper}>
        <div className={styles.itemDescriptionConteiner}>
          <p className={styles.itemDescription}>Breed:</p>
          <p className={styles.itemDescription}>Place:</p>
          <p className={styles.itemDescription}>Birth Date:</p>
        </div>
      <div className={styles.itemDescriptionConteiner}>
          <p className={styles.itemDescription}>{item.breed}</p>
          <p className={styles.itemDescription}>{item.location}</p>
          <p className={styles.itemDescription}>{item.birthDate}</p>
        </div>
      </div>
      <button className={styles.itemButton}>Learn more</button>
    </div>
  )
}

export default NoticesCategoriesItem;