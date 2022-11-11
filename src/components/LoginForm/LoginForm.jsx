import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { authOperations } from 'redux/auth';
import styles from './LoginForm.module.scss';

const LoginForm = ({ title }) => {
  const dispatch = useDispatch();
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

    dispatch(authOperations.logIn({ email, password }));
  };

  return (
    <div className={styles.formWrap}>
      <h1 className={styles.title}>{title}</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleLogin}
      >
        <Form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}></label>
            <Field
              type="email"
              name="email"
              className={styles.input}
              placeholder="Email"
            />
            <ErrorMessage name="email" component="div" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}></label>
            <Field
              type="password"
              name="password"
              className={styles.input}
              placeholder="Password"
            />
            <ErrorMessage name="password" component="div" />
          </div>
          <button type="submit" disabled={loading}>
            Login
          </button>
          {/* {loading && (
            <span className="spinner"></span>
          )} */}
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
