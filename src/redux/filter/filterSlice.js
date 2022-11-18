import { createSlice } from '@reduxjs/toolkit';
// import authOperations from './authOperations';
// import { showError } from 'components/Notification/Notification';

const initialState = {
  value: ''
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.value = action.payload
    }
  }
});

export const { setFilter } = filterSlice.actions

export default filterSlice.reducer;
