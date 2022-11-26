import { IoMdSearch } from 'react-icons/io';
import { DebounceInput } from 'react-debounce-input';
import PropTypes from 'prop-types';

import styles from './FilterInput.module.scss';

const FilterInput = ({ value, onSubmit, onChange }) => {
  return (
    <form onSubmit={onSubmit} className={styles.search}>
      <label htmlFor="search" className={styles.label}>
        <DebounceInput
          debounceTimeout={400}
          type="search"
          value={value}
          onChange={onChange}
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
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FilterInput;
