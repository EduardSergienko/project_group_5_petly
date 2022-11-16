import { useDispatch } from 'react-redux';

import { userOperations } from '../../redux/user';

import Loader from '../Loader/Loader';
import { DeleteButton } from '../../helpers';

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
        <img className={styles.image} src={photo} alt="photo_pet" />
      </div>
      <div className={styles.containerText}>
        <p className={styles.text}>Name: {name}</p>
        <p className={styles.text}>Date of birth: {birthday}</p>
        <p className={styles.text}>Breed: {breed}</p>
        <p className={styles.text}>Comments: {comments}</p>
      </div>
      {active ? (
        <div className={styles.loader}>
          <Loader size={44} />
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
