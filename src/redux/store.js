import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth';
import { userReducer } from './user';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
