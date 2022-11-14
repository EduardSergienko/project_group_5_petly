import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './AuthForm.module.scss';

const SecondStep = ({ onNextStep, onPrevStep, formData }) => {
  const phoneRegExp = /(?=.*\+[0-9]{3}\s?[0-9]{2}\s?[0-9]{3}\s?[0-9]{4}$)/;

  const validationSecondStepSchema = Yup.object({
    name: Yup.string().min(4, 'Name is too short').required('Required'),
    location: Yup.string().min(4, 'Location is too short').required('Required'),
    phone: Yup.string()
      .required('required')
      .matches(phoneRegExp, 'Phone number is not valid')
      .min(10, 'too short')
      .max(14, 'too long'),
  });

  const handleFormSubmit = values => {
    onNextStep(values, true);
  };

  return (
    <>
      <Formik
        initialValues={formData}
        validationSchema={validationSecondStepSchema}
        onSubmit={handleFormSubmit}
      >
        {({ values }) => (
          <Form className={styles.form}>
            <div className={styles.formGroup}>
              <Field
                className={styles.input}
                name="name"
                type="text"
                placeholder="Name"
              />
              <ErrorMessage
                name="name"
                render={msg => <div className={styles.errorMsg}>{msg}</div>}
              />
            </div>

            <div className={styles.formGroup}>
              <Field
                className={styles.input}
                name="location"
                type="text"
                placeholder="City, region"
              />
              <ErrorMessage
                name="location"
                render={msg => <div className={styles.errorMsg}>{msg}</div>}
              />
            </div>

            <div className={styles.formGroup}>
              <Field
                className={styles.input}
                name="phone"
                type="text"
                placeholder="Mobile phone"
              />
              <ErrorMessage
                name="phone"
                render={msg => <div className={styles.errorMsg}>{msg}</div>}
              />
            </div>

            <button className={styles.button} type="submit">
              Register
            </button>

            <button
              onClick={() => {
                onPrevStep(values);
              }}
              className={styles.button}
              type="button"
            >
              Back
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SecondStep;
