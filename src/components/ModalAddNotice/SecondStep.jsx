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
  return (
    <>
      <form className={styles.addForm}>
        <fieldset className={styles.fieldsetWrap}>
          <legend className={styles.labelTitle}>
            The sex <span className={styles.require}>*</span>
          </legend>
          <label className={styles.genderLabel} htmlFor="male">
            <input
              className={styles.radio}
              type="radio"
              id="male"
              name="sex"
              src={camera}
              alt="male"
              defaultChecked={secondStepValues.sex === 'male' && true}
              onChange={evt => {
                setSecondStepValues({
                  ...secondStepValues,
                  sex: evt.target.id,
                });
              }}
            />
            <span className={styles.genderMale}></span>
            <span>Male</span>
          </label>

          <label className={styles.genderLabel} htmlFor="female">
            <input
              className={styles.radio}
              type="radio"
              id="female"
              name="sex"
              src={camera}
              alt="male"
              defaultChecked={secondStepValues.sex === 'female' && true}
              onChange={evt => {
                setSecondStepValues({
                  ...secondStepValues,
                  sex: evt.target.id,
                });
              }}
            />
            <span className={styles.genderFemale}></span>

            <span>Female</span>
          </label>
        </fieldset>

        <label className={styles.labelTitle} htmlFor="location">
          Location<span className={styles.require}>*</span>
          <input
            className={`${styles.input} ${styles.secStepInput}`}
            type="text"
            id="location"
            placeholder="Type location"
            value={secondStepValues.location}
            onChange={evt => {
              setSecondStepValues({
                ...secondStepValues,
                location: evt.target.value,
              });
            }}
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
          <input
            className={styles.inputFile}
            type="file"
            id="avatar"
            accept="image/*, image/jpeg, image/jpg, image/png"
            required
            onChange={handleAddAvatar}
          />
        </label>

        <label className={styles.labelTitle} htmlFor="comments">
          Comments<span className={styles.require}>*</span>
          <textarea
            className={`${styles.textArea} ${styles.secStepInput} `}
            name="comments"
            id="comments"
            rows="3"
            maxLength="120"
            placeholder="Type comments"
            value={secondStepValues.comments}
            onChange={evt => {
              setSecondStepValues({
                ...secondStepValues,
                comments: evt.target.value,
              });
            }}
          ></textarea>
        </label>

        <div className={styles.buttonWrap}>
          <button
            onClick={handleBackToFirst}
            className={styles.button}
            type="button"
          >
            Back
          </button>
          <button
            onClick={handleSecondStepSubmit}
            className={styles.button}
            type="submit"
          >
            Done
          </button>
        </div>
      </form>
    </>
  );
};

export default SecondStep;
