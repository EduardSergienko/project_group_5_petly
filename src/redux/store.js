import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth';
import { userReducer } from './user';
import { noticesReducer } from './notices';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    notices: noticesReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
