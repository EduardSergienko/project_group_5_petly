import UserData from '../UserData/UserData';

import styles from './User.module.scss';

function User() {
  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.title}>My information:</h2>
        <div className={styles.userInformation}>
          <UserData />
        </div>
      </div>
    </div>
  );
}

export default User;
