import { IoMdSearch } from 'react-icons/io';
import { DebounceInput } from 'react-debounce-input';

import styles from './FilterInput.module.scss';

const FilterInput = ({ value, onChange }) => {
  return (
    <div className={styles.search}>
      <label htmlFor="search" className={styles.label}>
        <DebounceInput
          debounceTimeout={300}
          type="search"
          value={value}
          onChange={e => onChange(e.target.value)}
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
export default FilterInput;
