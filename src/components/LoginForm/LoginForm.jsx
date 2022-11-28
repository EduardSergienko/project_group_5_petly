import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import { IconContext } from 'react-icons';
import { FiEyeOff, FiEye } from 'react-icons/fi';
import { Dna } from 'react-loader-spinner';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

import { authOperations } from 'redux/auth';
import styles from 'components/AuthForm/AuthForm.module.scss';
import notices from 'helpers/Notification';

const LoginForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('auth.invalidEmail')
      .required('auth.requiredValue'),
    password: Yup.string()
      .matches(/^\S*$/, 'auth.notWhitespace')
      .min(7, 'auth.passwordShort')
      .max(32, 'auth.passwordLong')
      .required('auth.requiredValue'),
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
      <h1 className={styles.title}> {t('auth.login')}</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleLogin}
      >
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <label className={styles.formGroup}>
              <Field
                type="email"
                name="email"
                className={styles.input}
                placeholder={t('auth.emailPlaceholder')}
              />
              {errors.email && touched.email && (
                <div className={styles.errorMsg}>{t(errors.email)}</div>
              )}
            </label>
            <label className={styles.formGroup}>
              <Field
                type={show ? 'text' : 'password'}
                name="password"
                className={styles.input}
                placeholder={t('auth.passwordPlaceholder')}
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
              {errors.password && touched.password && (
                <div className={styles.errorMsg}>{t(errors.password)}</div>
              )}
            </label>
            <div>
              <button
                type="submit"
                className={styles.button}
                disabled={loading}
              >
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
                  t('auth.login')
                )}
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <p className={styles.textHint}>
        {t('auth.loginHint')}
        <Link className={styles.link} to="/register">
          {t('auth.register')}
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
