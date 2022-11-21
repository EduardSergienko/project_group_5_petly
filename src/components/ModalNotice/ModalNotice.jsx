import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import { noticesSelectors, noticesOperations } from '../../redux/notices';

import Loader from '../Loader/Loader';

import close from '../../image/svg/closeLine.svg';
import like from '../../image/svg/like.svg';
import noPhoto from '../../image/noPhoto.png';

import styles from './ModalNotice.module.scss';

function ModalNotice({ active, setActive }) {
  const dispatch = useDispatch();
  const more = useSelector(noticesSelectors.getNoticeInformationMore);
  const loading = useSelector(noticesSelectors.noticeLoading);
  const myFavorite = useSelector(noticesSelectors.myFavorite);
  const [width, setWidth] = useState(window.innerWidth);
  const mobileWidth = width < 480;

  const findFavorite = myFavorite.find(item => {
    if (item?._id) {
      return more?._id === item?._id;
    }
    return more?._id === item;
  });

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        setActive(false);
      }
    };

    const winScroll = e => {
      window.scrollTo(0, 0);
    };

    window.addEventListener('keydown', handleKeyDown);
    if (active && mobileWidth) {
      window.addEventListener('scroll', winScroll);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('scroll', winScroll);
    };
  }, [active, mobileWidth, setActive]);

  return (
    <div
      className={styles.container + ' ' + (active ? styles.active : '')}
      onClick={() => {
        setActive(false);
        // window.addEventListener('scroll', e => {
        //   window.scrollTo(0, 0);
        // });
      }}
    >
      {!loading ? (
        <div className={styles.modal} onClick={e => e.stopPropagation()}>
          <div className={styles.containerCategory}>
            <div className={styles.containerImage}>
              <img
                className={styles.image}
                src={`https://fetch-friend.herokuapp.com/${more?.petImageUrl}`}
                // src={more?.petImageUrl}
                alt={`photo_${more?.petName}`}
                onError={e => {
                  e.target.src = noPhoto;
                }}
              />
              <div className={styles.categoryNotice}>
                <p className={styles.textCategory}>{more?.category}</p>
              </div>
            </div>
            <div className={styles.containerInformationPets}>
              <h2 className={styles.title}>{more?.title}</h2>
              <ul>
                <li className={styles.item}>
                  <p className={styles.p}>Name:</p>
                  <span className={styles.span}>{more?.petName}</span>
                </li>
                <li className={styles.item}>
                  <p className={styles.p}>Birthday:</p>
                  <span className={styles.span}>{more?.birthDate}</span>
                </li>
                <li className={styles.item}>
                  <p className={styles.p}>Breed:</p>
                  <span className={styles.span}>{more?.breed}</span>
                </li>
                <li className={styles.item}>
                  <p className={styles.p}>Place:</p>
                  <span className={styles.span}>{more?.location}</span>
                </li>
                <li className={styles.item}>
                  <p className={styles.p}>The sex:</p>
                  <span className={styles.span}>{more?.sex}</span>
                </li>
                <li className={styles.item}>
                  <p className={styles.p}>Email:</p>
                  <span className={styles.span}>
                    {more?.owner?.email ? more?.owner?.email : '-'}
                  </span>
                </li>
                <li className={styles.item}>
                  <p className={styles.p}>Phone:</p>
                  <span className={styles.span}>
                    {more?.owner?.phone ? more?.owner?.phone : '-'}
                  </span>
                </li>
                {/* по условию  */}
                {more?.category === 'sell' && (
                  <li className={styles.item}>
                    <p className={styles.p}>Sell:</p>
                    <span className={styles.span}>{more?.price}$</span>
                  </li>
                )}
              </ul>
            </div>
          </div>

          <div className={styles.containerComments}>
            <p className={styles.textComments}>
              Comments:
              <span className={styles.spanComments}>{more?.comments}</span>
            </p>
          </div>
          <div className={styles.containerButton}>
            {findFavorite ? (
              <button
                className={styles.removeTo}
                onClick={() => {
                  dispatch(noticesOperations.removeFavorite(more._id));
                  toast.success(' Remove from favorite', {
                    position: 'top-right',
                    autoClose: 600,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: 'colored',
                  });
                }}
              >
                Remove from
                <img className={styles.likeSvg} src={like} alt="like" />
              </button>
            ) : (
              <button
                className={styles.addTo}
                onClick={() => {
                  dispatch(noticesOperations.addToFavorite(more._id));
                  toast.success('Add to favorite', {
                    position: 'top-right',
                    autoClose: 600,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: 'colored',
                  });
                }}
              >
                Add to <img className={styles.likeSvg} src={like} alt="like" />
              </button>
            )}

            <a className={styles.btnContact} href={`tel:${more?.owner?.phone}`}>
              Contact
            </a>
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
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default ModalNotice;

ModalNotice.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
};
