import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth';
import { noticesReducer } from './notices'
import { filterReducer } from './filter'


export const store = configureStore({
  reducer: {
    auth: authReducer,
    notices: noticesReducer,
    filter: filterReducer
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
