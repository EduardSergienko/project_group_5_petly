import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { authOperations } from '../../redux/auth';
import logout from '../../image/logout.png';
import styles from './Logout.module.scss';

function Logout() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const onChangeLogout = () => {
    // eslint-disable-next-line no-restricted-globals
    const boolPrompt = confirm('Do you really want to leave?');
    if (boolPrompt) {
      dispatch(authOperations.logOutUser());
    }
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={onChangeLogout}>
        <img className={styles.image} src={logout} alt="logout" />
        {t('user.logOut')}
      </button>
    </div>
  );
}

export default Logout;
