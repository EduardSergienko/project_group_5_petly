import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import InputMask from 'react-input-mask';
import { Dna } from 'react-loader-spinner';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { cityInputValidation } from 'helpers/CityValidation';
import styles from './AuthForm.module.scss';

function SecondStep({ onNextStep, onPrevStep, formData, loading }) {
  const { t } = useTranslation();

  const validationSecondStepSchema = Yup.object({
    name: Yup.string()
      .min(2, 'auth.nameShort')
      .matches(/^[a-zA-ZА-ЩЬЮЯҐЄІЇа-щьюяґєії'\s]+$/, 'auth.nameAlpabets')
      .required('auth.requiredValue'),
    location: Yup.string()
      .min(4, 'auth.locationShort')
      .matches(/^[a-zA-ZА-ЩЬЮЯҐЄІЇа-щьюяґєії'\s(,)]+$/, 'auth.nameAlpabets')
      .test('locationFormat', 'auth.cityFormat', cityInputValidation)
      .required('auth.requiredValue'),
    phone: Yup.string()
      .required('auth.requiredValue')
      .test('phone', 'auth.invalidPhone', value => {
        const valLengthWithoutDashes = value?.replace(/-|_/g, '').length;
        return valLengthWithoutDashes === 13;
      }),
  });

  const handleFormSubmit = values => {
    onNextStep(values, true);
  };

  return (
    <Formik
      initialValues={formData}
      validationSchema={validationSecondStepSchema}
      onSubmit={handleFormSubmit}
    >
      {({ values, errors, touched }) => (
        <Form className={styles.form}>
          <div className={styles.formGroup}>
            <Field
              className={styles.input}
              name="name"
              type="text"
              placeholder={t('auth.namePlaceholder')}
            />
            {errors.name && touched.name && (
              <div className={styles.errorMsg}>{t(errors.name)}</div>
            )}
          </div>

          <div className={styles.formGroup}>
            <Field
              className={styles.input}
              name="location"
              type="text"
              placeholder={t('auth.cityPlaceholder')}
            />
            {errors.location && touched.location && (
              <div className={styles.errorMsg}>{t(errors.location)}</div>
            )}
          </div>

          <div className={styles.formGroup}>
            <Field name="phone">
              {({ field }) => (
                <InputMask
                  {...field}
                  className={styles.input}
                  mask="+380999999999"
                  id="phone"
                  placeholder={t('auth.phonePlaceholder')}
                />
              )}
            </Field>
            {errors.phone && touched.phone && (
              <div className={styles.errorMsg}>{t(errors.phone)}</div>
            )}
          </div>

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
              t('auth.register')
            )}
          </button>

          <button
            onClick={() => {
              onPrevStep(values);
            }}
            className={styles.backButton}
            type="button"
          >
            {t('auth.back')}
          </button>
        </Form>
      )}
    </Formik>
  );
}

SecondStep.propTypes = {
  onNextStep: PropTypes.func.isRequired,
  onPrevStep: PropTypes.func.isRequired,
  formData: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    confirmPassword: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};

export default SecondStep;
