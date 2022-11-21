import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { IconContext } from 'react-icons';
import { FiEyeOff, FiEye } from 'react-icons/fi';
import { Dna } from 'react-loader-spinner';
import * as Yup from 'yup';

import { authOperations } from 'redux/auth';
import styles from 'components/AuthForm/AuthForm.module.scss';
import notices from 'helpers/Notification';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
      .matches(/^\S*$/, 'Whitespace is not allowed')
      .min(7, 'Password is too short')
      .max(32, 'Password is too long')
      .required('Required'),
  });

  const handleLogin = formValue => {
    const { email, password } = formValue;
    setLoading(true);

    dispatch(authOperations.logIn({ email, password }))
      .unwrap()
      .catch(err => {
        setLoading(false);
        notices.showError(err?.message);
      });
  };

  return (
    <div className={styles.formWrap}>
      <h1 className={styles.title}>Login</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleLogin}
      >
        <Form className={styles.form}>
          <label className={styles.formGroup}>
            <ErrorMessage
              name="email"
              render={msg => <div className={styles.errorMsg}>{msg}</div>}
            />
            <Field
              type="email"
              name="email"
              className={styles.input}
              placeholder="Email"
            />
          </label>
          <label className={styles.formGroup}>
            <ErrorMessage
              name="password"
              render={msg => <div className={styles.errorMsg}>{msg}</div>}
            />
            <Field
              type={show ? 'text' : 'password'}
              name="password"
              className={styles.input}
              placeholder="Password"
            />
            <span className={styles.icon} onClick={() => setShow(!show)}>
              {show && (
                <IconContext.Provider
                  value={{ style: { verticalAlign: 'middle' } }}
                >
                  <FiEye />
                </IconContext.Provider>
              )}
              {!show && (
                <IconContext.Provider
                  value={{ style: { verticalAlign: 'middle' } }}
                >
                  <FiEyeOff />
                </IconContext.Provider>
              )}
            </span>
          </label>
          <div>
            <button type="submit" className={styles.button} disabled={loading}>
              {loading ? (
                <Dna
                  visible={true}
                  height="40"
                  width="80"
                  ariaLabel="dna-loading"
                  wrapperClass="dna-wrapper"
                  wrapperStyle={{ verticalAlign: 'middle' }}
                />
              ) : (
                'Login'
              )}
            </button>
          </div>
        </Form>
      </Formik>
      <p className={styles.textHint}>
        Don't have an account?&nbsp;
        <Link className={styles.link} to="/register">
          Register
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
