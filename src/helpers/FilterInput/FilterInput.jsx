import { IoMdSearch } from 'react-icons/io';
import PropTypes from 'prop-types';

import styles from './FilterInput.module.scss';

const FilterInput = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className={styles.search}>
      <label htmlFor="search" className={styles.label}>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          className={styles.input}
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
};

export default FilterInput;
