import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import camera from '../../image/camera.png';
import styles from './ModalAddNotice.module.scss';
import add from '../../image/svg/add-image.svg';

const SecondStep = ({
  handleBackToFirst,
  secondStepValues,
  setSecondStepValues,
  handleAddAvatar,
  file,
  handleSecondStepSubmit,
}) => {
  const secondStepSchema = Yup.object({
    sex: Yup.string().required('Required'),
    lovacion: Yup.string()
      .min(2, 'Title is too short')
      .max(48, 'Title is too long')
      .required('Required'),
    price: Yup.number().min(1, 'Price is too short').required('Required'),
    birthDate: Yup.string().required('Required'),
    avatar: Yup.string().required('Required'),
    comments: Yup.string()
      .min(8, 'Comments is too short')
      .max(120, 'Comments is too long')
      .required('Required'),
  });

  return (
    <>
      <Formik
        initialValues={secondStepValues}
        onSubmit={handleSecondStepSubmit}
        validationSchema={secondStepSchema}
      >
        <Form className={styles.addForm}>
          <fieldset className={styles.fieldsetWrap}>
            <legend className={styles.labelTitle}>
              The sex <span className={styles.require}>*</span>
            </legend>
            <label className={styles.genderLabel} htmlFor="male">
              <Field
                className={styles.radio}
                type="radio"
                id="male"
                name="sex"
                src={camera}
                alt="male"
                value="male"
              />
              <span className={styles.genderMale}></span>
              <span>Male</span>
            </label>

            <label className={styles.genderLabel} htmlFor="female">
              <Field
                className={styles.radio}
                type="radio"
                id="female"
                name="sex"
                src={camera}
                alt="female"
                value="female"
              />
              <span className={styles.genderFemale}></span>

              <span>Female</span>
            </label>
            <ErrorMessage
              name="sex"
              render={msg => <div className={styles.errorMsg}>{msg}</div>}
            />
          </fieldset>

          <label className={styles.labelTitle} htmlFor="location">
            Location<span className={styles.require}>*</span>
            <Field
              className={`${styles.input} ${styles.secStepInput}`}
              type="text"
              id="location"
              placeholder="Type location"
              name="location"
            />
            <ErrorMessage
              name="location"
              render={msg => <div className={styles.errorMsg}>{msg}</div>}
            />
          </label>

          <label className={styles.labelTitle} htmlFor="price">
            Price<span className={styles.require}>*</span>
            <Field
              className={`${styles.input} ${styles.secStepInput}`}
              type="text"
              id="price"
              placeholder="Type price"
              name="price"
            />
            <ErrorMessage
              name="price"
              render={msg => <div className={styles.errorMsg}>{msg}</div>}
            />
          </label>

          <label className={styles.labelTitle}>
            Load the pet's image<span className={styles.require}>*</span>
          </label>

          <label className={styles.avatarLabel} htmlFor="avatar">
            <div className={styles.addImage}>
              {file ? (
                <img
                  id="petAvatar"
                  className={styles.selectedAvatar}
                  src={file}
                  alt={secondStepValues.avatar.name}
                />
              ) : (
                <img src={add} alt="add" />
              )}
            </div>
            <Field
              className={styles.inputFile}
              type="file"
              id="avatar"
              accept="image/*, image/jpeg, image/jpg, image/png"
              name="avatar"
            />
            <ErrorMessage
              name="avatar"
              render={msg => <div className={styles.errorMsg}>{msg}</div>}
            />
          </label>

          <label className={styles.labelTitle} htmlFor="comments">
            Comments<span className={styles.require}>*</span>
            <Field
              component="textarea"
              className={`${styles.textArea} ${styles.secStepInput} `}
              name="comments"
              id="comments"
              rows="3"
              placeholder="Type comments"
            ></Field>
            <ErrorMessage
              name="comments"
              render={msg => <div className={styles.errorMsg}>{msg}</div>}
            />
          </label>

          <div className={styles.buttonWrap}>
            <button
              onClick={handleBackToFirst}
              className={styles.button}
              type="button"
            >
              Back
            </button>
            <button className={styles.button} type="submit">
              Done
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default SecondStep;
