import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Container from 'components/Container/Container';
import UserData from '../UserData/UserData';
import Logout from '../Logout/Logout';
import PetsData from '../PetsData/PetsData';
import { AddPetsButton } from '../../helpers';

import styles from './User.module.scss';

function User() {
  const { t } = useTranslation();
  const [modalActivefForTablet, setmodalActivefForTablet] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const mobileWidth = width < 1280 && width >= 768;

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Container>
      <div className={styles.container}>
        <div className={styles.containerInformation}>
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>{t('user.myTitle')}:</h2>
            <AddPetsButton
              onClickBtn={setmodalActivefForTablet}
              customStyle={
                !mobileWidth ? { display: 'none' } : { null: 'none' }
              }
            />
          </div>
          <div className={styles.userInformation}>
            <UserData />
            <Logout />
          </div>
        </div>
        <PetsData
          modalActivefForTablet={modalActivefForTablet}
          setmodalActivefForTablet={setmodalActivefForTablet}
        />
      </div>
    </Container>
  );
}

export default User;
