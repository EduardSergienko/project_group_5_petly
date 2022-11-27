import { useSelector } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { cityInputValidation } from 'helpers/CityValidation';
import { noticesSelectors } from '../../redux/notices';
import camera from '../../image/camera.png';
import styles from './ModalAddNotice.module.scss';
import add from '../../image/svg/add-image.svg';

const SecondStep = ({
  handleBackToFirst,
  secondStepValues,
  handleAddAvatar,
  file,
  handleSecondStepSubmit,
  checkCategory,
}) => {
  const loading = useSelector(noticesSelectors.noticeLoading);

  const SUPPORTED_FORMATS = [
    'image/jpg',
    'image/jpeg',
    'image/gif',
    'image/png',
  ];

  const secondStepSchema = Yup.object({
    sex: Yup.string().required('Required'),
    location: Yup.string()
      .min(2, 'Location is too short')
      .max(48, 'Location is too long')
      .test(
        'locationFormat',
        'Format should be "city, region"',
        cityInputValidation
      )
      .required('Required'),
    price: Yup.number().when([], {
      is: () => checkCategory(),
      then: Yup.number().min(1).required('Required'),
      otherwise: Yup.number().notRequired(),
    }),
    avatar: Yup.mixed()
      .required('Required')
      .test(
        'fileFormat',
        'Unsupported file type',
        value => value && SUPPORTED_FORMATS.includes(value.type)
      ),
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
        {({ errors, touched, values, setFieldValue }) => (
          <Form className={styles.addForm}>
            <fieldset
              className={`${styles.fieldsetWrap} ${styles.secPagefieldsetWrap}`}
            >
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
                render={msg => <div className={styles.secStepError}>{msg}</div>}
              />
            </fieldset>

            <label className={styles.labelTitle} htmlFor="location">
              Location<span className={styles.require}>*</span>
              <Field
                className={`${styles.input} ${
                  errors.location && touched.location ? styles.errorInput : ''
                }`}
                type="text"
                id="location"
                placeholder="Type location"
                name="location"
              />
              <ErrorMessage
                name="location"
                render={msg => <div className={styles.secStepError}>{msg}</div>}
              />
            </label>
            {checkCategory() && (
              <label className={styles.labelTitle} htmlFor="price">
                Price<span className={styles.require}>*</span>
                <Field
                  className={`${styles.input} ${
                    errors.price && touched.price ? styles.errorInput : ''
                  }`}
                  type="number"
                  id="price"
                  placeholder="Type price"
                  name="price"
                />
                <ErrorMessage
                  name="price"
                  render={msg => (
                    <div className={styles.secStepError}>{msg}</div>
                  )}
                />
              </label>
            )}

            <label className={styles.labelTitle}>
              Load the pet's image<span className={styles.require}>*</span>
            </label>

            <label className={styles.avatarLabel} htmlFor="avatar">
              <div
                className={`${styles.addImage} ${
                  errors.avatar && touched.avatar ? styles.errorInput : ''
                }`}
              >
                {file ? (
                  <img
                    id="petAvatar"
                    className={`${styles.selectedAvatar} ${
                      errors.avatar && styles.avatarErrorType
                    }`}
                    src={file}
                    alt={secondStepValues.avatar.name}
                  />
                ) : (
                  <img src={add} alt="add" />
                )}
              </div>
              <input
                className={styles.inputFile}
                type="file"
                id="avatar"
                name="avatar"
                accept="image/png, image/jpeg, image/jpg, image/gif"
                onChange={e => handleAddAvatar(e, setFieldValue)}
              />
              {touched.avatar && errors.avatar && (
                <div className={styles.secStepError}>{errors.avatar}</div>
              )}
            </label>

            <label className={styles.labelTitle} htmlFor="comments">
              Comments<span className={styles.require}>*</span>
              <Field
                component="textarea"
                className={`${styles.textArea} ${styles.secStepInput} ${
                  errors.comments && touched.comments ? styles.errorInput : ''
                }`}
                name="comments"
                id="comments"
                rows="3"
                placeholder="Type comments"
              ></Field>
              <ErrorMessage
                name="comments"
                render={msg => <div className={styles.secStepError}>{msg}</div>}
              />
            </label>

            <div className={styles.buttonWrap}>
              <button
                onClick={() => handleBackToFirst(values)}
                className={styles.button}
                type="button"
              >
                Back
              </button>
              <button
                className={styles.button}
                type="submit"
                disabled={loading ? true : false}
              >
                Done
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

SecondStep.propTypes = {
  handleBackToFirst: PropTypes.func.isRequired,
  secondStepValues: PropTypes.shape({
    sex: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    avatar: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
      .isRequired,
    comments: PropTypes.string.isRequired,
  }).isRequired,
  file: PropTypes.string,
  handleAddAvatar: PropTypes.func.isRequired,
  handleSecondStepSubmit: PropTypes.func.isRequired,
  checkCategory: PropTypes.func.isRequired,
};

export default SecondStep;
