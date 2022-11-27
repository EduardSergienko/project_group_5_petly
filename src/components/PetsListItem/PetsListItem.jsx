import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { userOperations } from '../../redux/user';

import Loader2 from '../Loader2/Loader2';
import { DeleteButton } from '../../helpers';

import noPhoto from '../../image/noPhoto.png';

import styles from './PetsListItem.module.scss';

function PetsListItem({
  id,
  birthday,
  breed,
  comments,
  name,
  photo,
  activeLoader,
  active,
}) {
  const dispatch = useDispatch();

  const deleteButton = id => {
    dispatch(userOperations.deleteUserPost(id));
    activeLoader(id);
  };

  return (
    <li className={styles.container}>
      <div className={styles.containerImg}>
        <img
          className={styles.image}
          src={photo}
          alt="photo_pet"
          onError={e => {
            e.target.src = noPhoto;
          }}
        />
      </div>
      <div className={styles.containerText}>
        <p className={styles.text}>Name: {name}</p>
        <p className={styles.text}>Date of birth: {birthday}</p>
        <p className={styles.text}>Breed: {breed}</p>
        <p className={styles.text}>Comments: {comments}</p>
      </div>
      {active ? (
        <div className={styles.loader}>
          <Loader2 size={44} />
        </div>
      ) : (
        <DeleteButton
          stylesBtn={styles.button}
          onClick={deleteButton}
          id={id}
        />
      )}
    </li>
  );
}

export default PetsListItem;

PetsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  comments: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  activeLoader: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};
