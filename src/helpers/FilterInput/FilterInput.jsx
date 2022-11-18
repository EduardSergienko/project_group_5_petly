import { IoMdSearch } from 'react-icons/io';
import { DebounceInput } from 'react-debounce-input';
import PropTypes from 'prop-types';

import styles from './FilterInput.module.scss';

const FilterInput = ({ value, onChange }) => {
  return (
    <div className={styles.search}>
      <label htmlFor="search" className={styles.label}>
        <DebounceInput
          debounceTimeout={400}
          type="search"
          value={value}
          onChange={e => onChange(e.target.value.trim())}
          name="search"
          id="search"
          placeholder="Search"
          className={styles.input}
        />
        <i className={styles.searchIcon} aria-hidden="true">
          <IoMdSearch />
        </i>
      </label>
    </div>
  );
};

FilterInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FilterInput;
