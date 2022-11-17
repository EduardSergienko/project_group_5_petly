import styles from './ModalAddNotice.module.scss';

const FirstStep = ({
  handleFirstStepSubmit,
  firstStepValues,
  setFirstStepValues,
  handleModalClose,
}) => {
  return (
    <>
      <form className={styles.addForm} onSubmit={handleFirstStepSubmit}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
          consectetur
        </p>

        <fieldset className={styles.fieldsetWrap}>
          <label className={styles.labelContainer} htmlFor="lost-found">
            <input
              className={styles.radio}
              type="radio"
              name="category"
              id="lost-found"
              defaultChecked={firstStepValues.category === 'lost-found' && true}
              onChange={evt => {
                setFirstStepValues({
                  ...firstStepValues,
                  category: evt.target.id,
                });
              }}
            />
            <span className={styles.categoryLostFound}></span>
          </label>

          <label className={styles.labelContainer} htmlFor="for-free">
            <input
              className={styles.radio}
              type="radio"
              name="category"
              id="for-free"
              defaultChecked={firstStepValues.category === 'for-free' && true}
              onChange={evt => {
                setFirstStepValues({
                  ...firstStepValues,
                  category: evt.target.id,
                });
              }}
            />
            <span className={styles.categoryForFree}></span>
          </label>

          <label className={styles.labelContainer} htmlFor="sell">
            <input
              className={styles.radio}
              type="radio"
              name="category"
              id="sell"
              defaultChecked={firstStepValues.category === 'sell' && true}
              onChange={evt => {
                setFirstStepValues({
                  ...firstStepValues,
                  category: evt.target.id,
                });
              }}
            />
            <span className={styles.categorySell}></span>
          </label>
        </fieldset>
        <label className={styles.labelTitle} htmlFor="title">
          Tittle of ad<span className={styles.require}>*</span>
          <input
            className={styles.input}
            type="text"
            id="title"
            placeholder="Type title"
            value={firstStepValues.title}
            onChange={evt => {
              setFirstStepValues({
                ...firstStepValues,
                title: evt.target.value,
              });
            }}
          />
        </label>

        <label className={styles.labelTitle} htmlFor="name">
          Name<span className={styles.require}>*</span>
          <input
            className={styles.input}
            type="text"
            id="name"
            placeholder="Type name"
            value={firstStepValues.name}
            onChange={evt => {
              setFirstStepValues({
                ...firstStepValues,
                name: evt.target.value,
              });
            }}
          />
        </label>

        <label className={styles.labelTitle} htmlFor="birthDate">
          Date of birth<span className={styles.require}>*</span>
          <input
            className={styles.input}
            type="text"
            id="birthDate"
            placeholder="Type date of birth"
            value={firstStepValues.birthDate}
            onChange={evt => {
              setFirstStepValues({
                ...firstStepValues,
                birthDate: evt.target.value,
              });
            }}
          />
        </label>

        <label className={styles.labelTitle} htmlFor="breed">
          Breed<span className={styles.require}>*</span>
          <input
            className={styles.input}
            type="text"
            id="breed"
            placeholder="Type breed"
            value={firstStepValues.breed}
            onChange={evt => {
              setFirstStepValues({
                ...firstStepValues,
                breed: evt.target.value,
              });
            }}
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
      </form>
    </>
  );
};

export default FirstStep;
