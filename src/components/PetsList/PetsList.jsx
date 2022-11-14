import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { userOperations, userSelectors } from '../../redux/user';

import PetsListItem from '../PetsListItem/PetsListItem';

function PetsList() {
  const dispatch = useDispatch();
  const ownPosts = useSelector(userSelectors.getUserOwnPosts);
  const [loader, setLoader] = useState(null);

  useEffect(() => {
    dispatch(userOperations.userOwnPosts());
  }, [dispatch]);

  const activeLoader = id => {
    setLoader(id);
  };

  return (
    <ul>
      {ownPosts?.map(({ id, birthday, breed, comments, name, photo }) => (
        <PetsListItem
          key={id}
          id={id}
          birthday={birthday}
          breed={breed}
          comments={comments}
          name={name}
          photo={photo}
          active={loader === id}
          activeLoader={activeLoader}
        />
      ))}
    </ul>
  );
}

export default PetsList;
