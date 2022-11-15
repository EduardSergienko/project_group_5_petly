import { ReactComponent as AddToFavorite } from '../../../image/svg/addToFavorite.svg';

import styles from './NoticesCategoriesList.module.scss';

function NoticesCategoriesItem({name}) {
  return (
    <div className={styles.item}>
      <div className={styles.imgWrapper}>
        <img src={require('./dog.jpg')} alt='Pet' className={styles.img}/>
      </div>
      <p className={styles.itemCategory}>In good hands</p>
      <AddToFavorite className={styles.addToFavorite} />
      <h3 className={styles.itemHeader}>Сute dog looking for a home</h3>
      <div className={styles.itemDescriptionWrapper}>
        <div className={styles.itemDescriptionConteiner}>
          <p className={styles.itemDescription}>Breed:</p>
          <p className={styles.itemDescription}>Place:</p>
          <p className={styles.itemDescription}>Age:</p>
        </div>
      <div className={styles.itemDescriptionConteiner}>
          <p className={styles.itemDescription}>Pomeranian</p>
          <p className={styles.itemDescription}>Lviv</p>
          <p className={styles.itemDescription}>One year</p>
        </div>
      </div>
      <button className={styles.itemButton}>Learn more</button>
    </div>
  )
}

export default NoticesCategoriesItem;