import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { authOperations } from '../../redux/auth';
import logout from '../../image/logout.png';
import styles from './Logout.module.scss';

function Logout() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={() => dispatch(authOperations.logOutUser())}
      >
        <img className={styles.image} src={logout} alt="logout" />
        {t('user.logOut')}
      </button>
    </div>
  );
}

export default Logout;
