import { Formik, Form, Field } from 'formik';
import { FiEyeOff, FiEye } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import * as Yup from 'yup';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import styles from './AuthForm.module.scss';

const FirstStep = ({ onNextStep, formData }) => {
  const { t } = useTranslation();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfPassword, setShowConfPassword] = useState(false);

  const validationFirstStepSchema = Yup.object({
    email: Yup.string()
      .email('auth.invalidEmail')
      .required('auth.requiredValue'),
    password: Yup.string()
      .matches(/^\S*$/, 'auth.notWhitespace')
      .min(7, 'auth.passwordShort')
      .max(32, 'auth.passwordLong')
      .required('auth.requiredValue'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'auth.passwordsMatch')
      .required('auth.requiredValue'),
  });

  const handleFormSubmit = values => {
    onNextStep(values);
  };

  return (
    <Formik
      initialValues={formData}
      validationSchema={validationFirstStepSchema}
      onSubmit={handleFormSubmit}
    >
      {({ errors, touched }) => (
        <Form className={styles.form}>
          <label className={styles.formGroup}>
            <Field
              className={styles.input}
              name="email"
              type="text"
              placeholder={t('auth.emailPlaceholder')}
            />
            {errors.email && touched.email && (
              <div className={styles.errorMsg}>{t(errors.email)}</div>
            )}
          </label>

          <label className={styles.formGroup}>
            <Field
              className={styles.input}
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder={t('auth.passwordPlaceholder')}
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
            {errors.password && touched.password && (
              <div className={styles.errorMsg}>{t(errors.password)}</div>
            )}
          </label>

          <label className={styles.formGroup}>
            <Field
              className={styles.input}
              name="confirmPassword"
              type={showConfPassword ? 'text' : 'password'}
              placeholder={t('auth.confirmPlaceholder')}
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
            {errors.confirmPassword && touched.confirmPassword && (
              <div className={styles.errorMsg}>{t(errors.confirmPassword)}</div>
            )}
          </label>

          <button className={styles.button} type={'submit'}>
            {t('auth.next')}
          </button>
        </Form>
      )}
    </Formik>
  );
};

FirstStep.propTypes = {
  onNextStep: PropTypes.func.isRequired,
  formData: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    confirmPassword: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};

export default FirstStep;
