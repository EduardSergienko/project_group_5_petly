import styles from './AuthForm.module.scss';
import { FiEyeOff, FiEye } from 'react-icons/fi';
import { IconContext } from 'react-icons';

const FirstStep = ({
  formData,
  setFormData,
  showPassword,
  setShowPassword,
  showConfPassword,
  setShowConfPassword,
}) => {
  return (
    <>
      <div className={styles.formGroup}>
        <input
          className={styles.input}
          type="text"
          placeholder="Email"
          value={formData.email}
          onChange={event =>
            setFormData({ ...formData, email: event.target.value })
          }
        />
      </div>
      <div className={styles.formGroup}>
        <input
          className={styles.input}
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          value={formData.password}
          onChange={event =>
            setFormData({ ...formData, password: event.target.value })
          }
        />
        <span
          className={styles.icon}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword && (
            <IconContext.Provider
              value={{ style: { verticalAlign: 'middle' } }}
            >
              <FiEye />
            </IconContext.Provider>
          )}
          {!showPassword && (
            <IconContext.Provider
              value={{ style: { verticalAlign: 'middle' } }}
            >
              <FiEyeOff />
            </IconContext.Provider>
          )}
        </span>
      </div>
      <div className={styles.formGroup}>
        <input
          className={styles.input}
          type={showConfPassword ? 'text' : 'password'}
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={event =>
            setFormData({ ...formData, confirmPassword: event.target.value })
          }
        />
        <span
          className={styles.icon}
          onClick={() => setShowConfPassword(!showConfPassword)}
        >
          {showConfPassword && (
            <IconContext.Provider
              value={{ style: { verticalAlign: 'middle' } }}
            >
              <FiEye />
            </IconContext.Provider>
          )}
          {!showConfPassword && (
            <IconContext.Provider
              value={{ style: { verticalAlign: 'middle' } }}
            >
              <FiEyeOff />
            </IconContext.Provider>
          )}
        </span>
      </div>
    </>
  );
};

export default FirstStep;
