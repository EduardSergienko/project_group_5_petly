import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.scss';

const lngs = {
  en: { nativeName: 'English' },
  ua: { nativeName: 'Українська' },
};

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

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
            aria-label="language-switch"
          />
          <label
            className={styles.languageLabel}
            htmlFor={lng}
            style={{
              backgroundColor: i18n.resolvedLanguage === lng ? '#fdf7f2' : '',
            }}
          ></label>
        </section>
      ))}
    </form>
  );
};

export default LanguageSwitcher;
