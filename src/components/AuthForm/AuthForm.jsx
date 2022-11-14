import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import styles from './AuthForm.module.scss';
import { authOperations } from 'redux/auth';

const AuthForm = () => {
  const dispatch = useDispatch();
  const [step, setStep] = useState(0);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    location: '',
    phone: '',
  });

  const makeDispatchFormData = formData => {
    dispatch(authOperations.register(formData));
  };

  const handleNextStep = (newDate, final = false) => {
    setFormData(prev => ({ ...prev, ...newDate }));

    if (final) {
      makeDispatchFormData(newDate);
      return;
    }

    setStep(prev => prev + 1);
  };

  const handlePrevStep = newDate => {
    setFormData(prev => ({ ...prev, ...newDate }));
    setStep(prev => prev - 1);
  };

  const PageDisplay = () => {
    if (step === 0) {
      return <FirstStep onNextStep={handleNextStep} formData={formData} />;
    }

    if (step === 1) {
      return (
        <SecondStep
          onNextStep={handleNextStep}
          onPrevStep={handlePrevStep}
          formData={formData}
        />
      );
    }
  };

  return (
    <div className={styles.formWrap}>
      <h1 className={styles.title}>Registration</h1>
      {PageDisplay()}

      <p className={styles.textHint}>
        Already have an account?&nbsp;
        <NavLink className={styles.link} to="/login">
          Login
        </NavLink>
      </p>
    </div>
  );
};

export default AuthForm;
