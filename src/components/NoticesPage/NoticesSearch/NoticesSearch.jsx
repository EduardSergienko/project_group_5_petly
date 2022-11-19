import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { setFilter } from 'redux/filter/filterSlice';
import styles from './NoticesSearch.module.scss';

function NoticesSearch() {
  const dispatch = useDispatch()
  const value = useSelector(state => state.filter.value)
  const [searchParams, setSearchParams] = useSearchParams()

  const handleChangeInput = (e) => {
    dispatch(setFilter(e.target.value))
  }

  useEffect(() => {
    setSearchParams({filter: value})
  }, [value, setSearchParams])

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