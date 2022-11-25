import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.scss';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [lngs, setLngs] = useState({ en: { nativeName: 'English' } });

  const [width, setWidth] = useState(window.innerWidth);
  const descktopWidth = width > 1279;

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    i18n.services.backendConnector.backend.getLanguages((err, ret) => {
      if (err) return; // TODO: handle err...
      setLngs(ret);
    });
  }, [i18n.services.backendConnector.backend]);

  const onOptionChange = e => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <form
      className={styles.languageWrap}
      role="radiogroup"
      aria-labelledby="language-switcher"
    >
      {Object.keys(lngs).map(lng => (
        <section
          className={`${
            lng === 'en' ? styles.languageLeft : styles.languageRight
          } `}
          key={lng}
          style={{
            color: i18n.resolvedLanguage === lng ? '#a1a0a0' : '',
          }}
        >
          <input
            className={styles.languageControl}
            type="radio"
            id={lng}
            name="language-switch"
            value={lng}
            onChange={onOptionChange}
          />
          <label
            className={styles.languageLabel}
            htmlFor={lng}
            style={{
              backgroundColor: i18n.resolvedLanguage === lng ? '#fdf7f2' : '',
            }}
          >
            {descktopWidth && <>{lng}</>}
          </label>
        </section>
      ))}
    </form>
  );
};

export default LanguageSwitcher;
