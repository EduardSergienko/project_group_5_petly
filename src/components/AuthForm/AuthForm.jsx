import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import styles from './AuthForm.module.scss';
import { authOperations } from 'redux/auth';

const AuthForm = () => {
  const [page, setPage] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfPassword, setShowConfPassword] = useState(false);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    location: '',
    phone: '',
  });

  const PageDisplay = () => {
    if (page === 0) {
      return (
        <FirstStep
          formData={formData}
          setFormData={setFormData}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          showConfPassword={showConfPassword}
          setShowConfPassword={setShowConfPassword}
        />
      );
    }

    if (page === 1) {
      return <SecondStep formData={formData} setFormData={setFormData} />;
    }
  };

  const handleFormSubmit = evt => {
    evt.preventDefault();
    if (page === 1) {
      console.log('test');
      dispatch(authOperations.register(formData));
    } else {
      setPage(prevPage => prevPage + 1);
    }
  };

  return (
    <div className={styles.formWrap}>
      <h1 className={styles.title}>Registration</h1>

      <form className={styles.form} onSubmit={handleFormSubmit}>
        {PageDisplay()}

        <button className={styles.button} type={'submit'}>
          {page === 1 ? 'Submit' : 'Next'}
        </button>

        <button
          className={page === 0 ? styles.buttonNext : styles.button}
          disabled={page === 0}
          onClick={() => {
            setPage(prevPage => prevPage - 1);
          }}
          type="button"
        >
          Back
        </button>
        <p className={styles.textHint}>
          Already have an account?&nbsp;
          <NavLink className={styles.link} to="/login">
            Login
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default AuthForm;
