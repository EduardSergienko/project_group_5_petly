import { useState } from 'react';
import { useSelector } from 'react-redux';

import { authSelectors } from 'redux/auth';

import PetsListItem from '../PetsListItem/PetsListItem';

function PetsList() {
  const ownPosts = useSelector(authSelectors.getUserAnimal);
  const [loader, setLoader] = useState(null);

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
