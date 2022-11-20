import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import styles from './NoticesSearch.module.scss';

function NoticesSearch() {
  const dispatch = useDispatch()
  const value = useSelector(state => state.filter.value)

  const handleChangeInput = (e) => {
    dispatch(setFilter(e.target.value))
  }

  return (
    <input
      className={styles.input}
      placeholder='Search'
      type='text'
      name='filter'
      value={value}
      onChange={handleChangeInput}
    />
  )
}

export default NoticesSearch;