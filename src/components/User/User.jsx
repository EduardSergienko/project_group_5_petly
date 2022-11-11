import UserData from '../UserData/UserData';
import Logout from '../Logout/Logout';
import PetsData from '../PetsData/PetsData';

import styles from './User.module.scss';

function User() {
  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.title}>My information:</h2>
        <div className={styles.userInformation}>
          <UserData />
          <Logout />
        </div>
      </div>
      <PetsData />
    </div>
  );
}

export default User;
