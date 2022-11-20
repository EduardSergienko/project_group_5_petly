import close from '../../image/svg/closeLine.svg';
import imtest from '../../image/main_page_img.jpg';

import styles from './ModalNotice.module.scss';

function ModalNotice({ active, setActive }) {
  return (
    <div
      className={styles.container + ' ' + (active ? styles.active : '')}
      onClick={() => setActive(false)}
      id={'container-modal'}
    >
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <div className={styles.containerCategory}>
          <div className={styles.containerImage}>
            <img className={styles.image} src={imtest} alt={`photo_${'sdf'}`} />
            <div>
              <p className={styles.categoryNotice}>Category</p>
            </div>
          </div>
          <div>
            <h2>Сute dog looking for a home</h2>
            <ul>
              <li>
                <span>Name:</span>
                <span>Birthday:</span>
                <span>Breed:</span>
                <span>Place:</span>
                <span>The sex:</span>
                <span>Email:</span>
                <span>Phone:</span>
                {/* по условию  */}
                <span>Sell:</span>
              </li>
            </ul>
          </div>
        </div>

        <p>
          Comments: Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor
          sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem
        </p>
        <div>
          <button></button>
          <button></button>
        </div>
        <button
          className={styles.button}
          onClick={() => {
            setActive(false);
          }}
        >
          <img className={styles.imgB} src={close} alt="close" />
        </button>
      </div>
    </div>
  );
}

export default ModalNotice;
