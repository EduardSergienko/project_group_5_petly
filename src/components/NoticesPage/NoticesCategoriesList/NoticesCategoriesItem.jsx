import { ReactComponent as AddToFavorite } from '../../../image/svg/addToFavorite.svg';

import styles from './NoticesCategoriesList.module.scss';

function NoticesCategoriesItem({ item }) {
  
  return (
    <div className={styles.item}>
      <div className={styles.imgWrapper}>
        <img src={item.petImageUrl} alt='Pet' className={styles.img}/>
      </div>
      <p className={styles.itemCategory}>In good hands</p>
      <AddToFavorite className={styles.addToFavorite} />
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