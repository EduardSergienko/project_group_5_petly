import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { authSelectors } from 'redux/auth';

import PetsListItem from '../PetsListItem/PetsListItem';

function PetsList() {
  const dispatch = useDispatch();
  const ownPosts = useSelector(authSelectors.getUserAnimal);
  const [loader, setLoader] = useState(null);

  // console.log(ownPosts);

  useEffect(() => {
    // dispatch(authSelectors.userPosts());
  }, [dispatch]);

  const activeLoader = id => {
    setLoader(id);
  };

  return (
    <ul>
      {ownPosts?.map(({ _id, birthday, breed, comments, name, photo }) => (
        <PetsListItem
          key={_id}
          id={_id}
          birthday={birthday}
          breed={breed}
          comments={comments}
          name={name}
          photo={photo}
          active={loader === _id}
          activeLoader={activeLoader}
        />
      ))}
    </ul>
  );
}

export default PetsList;
