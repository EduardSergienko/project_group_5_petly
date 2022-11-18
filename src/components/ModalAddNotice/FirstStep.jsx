import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './ModalAddNotice.module.scss';

const FirstStep = ({
  handleFirstStepSubmit,
  firstStepValues,
  setFirstStepValues,
  handleModalClose,
}) => {
  const firstStepSchema = Yup.object({
    category: Yup.string().required('Required'),
    title: Yup.string()
      .min(2, 'Title is too short')
      .max(48, 'Title is too long')
      .required('Required'),
    name: Yup.string()
      .min(2, 'Name is too short')
      .max(16, 'Name is too long')
      .required('Required'),
    birthDate: Yup.string().required('Required'),
    breed: Yup.string()
      .min(2, 'Name is too short')
      .max(24, 'Name is too long')
      .required('Required'),
  });

  return (
    <>
      <Formik
        initialValues={firstStepValues}
        onSubmit={handleFirstStepSubmit}
        validationSchema={firstStepSchema}
      >
        <Form className={styles.addForm}>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
            consectetur
          </p>

          <fieldset className={styles.fieldsetWrap}>
            <label className={styles.labelContainer} htmlFor="lost-found">
              <Field
                className={styles.radio}
                type="radio"
                name="category"
                id="lost-found"
                value="lost-found"
              />
              <span className={styles.categoryLostFound}></span>
            </label>

            <label className={styles.labelContainer} htmlFor="for-free">
              <Field
                className={styles.radio}
                type="radio"
                name="category"
                id="for-free"
                value="for-free"
              />
              <span className={styles.categoryForFree}></span>
            </label>

            <label className={styles.labelContainer} htmlFor="sell">
              <Field
                className={styles.radio}
                type="radio"
                name="category"
                id="sell"
                value="sell"
              />
              <span className={styles.categorySell}></span>
            </label>
          </fieldset>
          <label className={styles.labelTitle} htmlFor="title">
            Tittle of ad<span className={styles.require}>*</span>
            <Field
              className={styles.input}
              type="text"
              id="title"
              name="title"
              placeholder="Type title"
            />
            <ErrorMessage
              name="title"
              render={msg => <div className={styles.errorMsg}>{msg}</div>}
            />
          </label>

          <label className={styles.labelTitle} htmlFor="name">
            Name<span className={styles.require}>*</span>
            <Field
              className={styles.input}
              type="text"
              id="name"
              name="name"
              placeholder="Type name"
            />
            <ErrorMessage
              name="name"
              render={msg => <div className={styles.errorMsg}>{msg}</div>}
            />
          </label>

          <label className={styles.labelTitle} htmlFor="birthDate">
            Date of birth<span className={styles.require}>*</span>
            <Field
              className={styles.input}
              type="text"
              id="birthDate"
              name="birthDate"
              placeholder="Type date of birth"
            />
            <ErrorMessage
              name="birthDate"
              render={msg => <div className={styles.errorMsg}>{msg}</div>}
            />
          </label>

          <label className={styles.labelTitle} htmlFor="breed">
            Breed<span className={styles.require}>*</span>
            <Field
              className={styles.input}
              type="text"
              id="breed"
              name="breed"
              placeholder="Type breed"
            />
            <ErrorMessage
              name="breed"
              render={msg => <div className={styles.errorMsg}>{msg}</div>}
            />
          </label>

          <div className={styles.buttonWrap}>
            <button
              onClick={handleModalClose}
              className={styles.button}
              type="button"
            >
              Cancel
            </button>
            <button className={styles.button} type="submit">
              Next
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default FirstStep;
