import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { userOperations, userSelectors } from '../../redux/user';

// import PetsListItem from '../PetsListItem/PetsListItem';

import styles from './PetsList.module.scss';

function PetsList() {
  const dispatch = useDispatch();
  const ownPosts = useSelector(userSelectors.getUserOwnPosts);
  console.log(ownPosts);

  useEffect(() => {
    dispatch(userOperations.userOwnPosts());
  }, [dispatch]);

  return <ul></ul>;
}

export default PetsList;
