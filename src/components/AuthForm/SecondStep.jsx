import styles from './AuthForm.module.scss';

const SecondStep = ({ formData, setFormData }) => {
  return (
    <>
      <div className={styles.formGroup}>
        <input
          className={styles.input}
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={event =>
            setFormData({ ...formData, name: event.target.value })
          }
        />
      </div>
      <div className={styles.formGroup}>
        <input
          className={styles.input}
          type="text"
          placeholder="City, region"
          value={formData.location}
          onChange={event =>
            setFormData({ ...formData, location: event.target.value })
          }
        />
      </div>
      <div className={styles.formGroup}>
        <input
          className={styles.input}
          type="text"
          placeholder="Mobile phone"
          value={formData.phone}
          onChange={event =>
            setFormData({ ...formData, phone: event.target.value })
          }
        />
      </div>
    </>
  );
};

export default SecondStep;
