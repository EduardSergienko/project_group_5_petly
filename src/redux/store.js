import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    auth: '',
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
