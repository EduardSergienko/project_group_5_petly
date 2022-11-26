import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import styles from './AuthForm.module.scss';
import { authOperations } from 'redux/auth';
import notices from 'helpers/Notification';

const AuthForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    location: '',
    phone: '',
  });

  const makeDispatchFormData = formData => {
    setLoading(true);

    dispatch(authOperations.register(formData))
      .unwrap()
      .then(() => {
        notices.showSuccess(
          <>{t('auth.registerSuccess', { user: `${formData.name}` })}</>
        );
      })
      .catch(err => {
        setLoading(false);
        notices.showError(err?.message);
      });
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
          loading={loading}
        />
      );
    }
  };

  return (
    <div className={styles.formWrap}>
      <h1 className={styles.title}>{t('auth.register')}</h1>
      {PageDisplay()}

      <p className={styles.textHint}>
        {t('auth.hint')}
        <NavLink className={styles.link} to="/login">
          {t('auth.login')}
        </NavLink>
      </p>
    </div>
  );
};

export default AuthForm;
