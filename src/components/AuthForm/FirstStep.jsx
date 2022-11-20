import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FiEyeOff, FiEye } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import * as Yup from 'yup';
import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './AuthForm.module.scss';

const FirstStep = ({ onNextStep, formData }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfPassword, setShowConfPassword] = useState(false);

  const validationFirstStepSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
      .matches(/^\S*$/, 'Whitespace is not allowed')
      .min(7, 'Password is too short')
      .max(32, 'Password is too long')
      .required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
  });

  const handleFormSubmit = values => {
    onNextStep(values);
  };

  return (
    <>
      <Formik
        initialValues={formData}
        validationSchema={validationFirstStepSchema}
        onSubmit={handleFormSubmit}
      >
        {() => (
          <Form className={styles.form}>
            <div className={styles.formGroup}>
              <ErrorMessage
                name="email"
                render={msg => <div className={styles.errorMsg}>{msg}</div>}
              />
              <Field
                className={styles.input}
                name="email"
                type="text"
                placeholder="Email"
              />
            </div>

            <div className={styles.formGroup}>
              <ErrorMessage
                name="password"
                render={msg => <div className={styles.errorMsg}>{msg}</div>}
              />
              <Field
                className={styles.input}
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
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
              <ErrorMessage
                name="confirmPassword"
                render={msg => <div className={styles.errorMsg}>{msg}</div>}
              />
              <Field
                className={styles.input}
                name="confirmPassword"
                type={showConfPassword ? 'text' : 'password'}
                placeholder="Confirm Password"
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

            <button className={styles.button} type={'submit'}>
              Next
            </button>
          </Form>
        )}
      </Formik>
    </>
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
