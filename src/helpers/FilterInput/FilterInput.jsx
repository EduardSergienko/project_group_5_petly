import { IoMdSearch } from 'react-icons/io';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import styles from './FilterInput.module.scss';

const FilterInput = ({ onSubmit, onChange, cssClass }) => {
  const { t } = useTranslation();

  return (
    <form onSubmit={onSubmit} className={`${styles.search} ${cssClass}`}>
      <label htmlFor="search" className={styles.label}>
        <input
          type="text"
          name="search"
          id="search"
          placeholder={t('news.search')}
          className={styles.input}
          onChange={onChange}
        />
        <button className={styles.searchBtn} type="submit">
          <IoMdSearch className={styles.searchIcon} />
        </button>
      </label>
    </form>
  );
};

FilterInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  cssClass: PropTypes.string,
};

export default FilterInput;
