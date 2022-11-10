import UserData from '../UserData/UserData';

import styles from './User.module.scss';

function User() {
  return (
    <div className={styles.container}>
      <UserData />
    </div>
  );
}

export default User;
