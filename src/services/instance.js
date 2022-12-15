import axios from 'axios';
import { authOperations } from '../redux/auth';

const urlsSkipAuth = [
  '/auth/register',
  '/auth/login',
  '/auth/logout',
  '/auth/refresh',
];

let store;

export const injectStore = _store => {
  store = _store;
};

export const axiosInstance = axios.create({
  baseURL: 'https://project-group-5-petly-back-end.vercel.app/api',
  withCredentials: true,
});

axiosInstance.interceptors.request.use(async config => {
  if (config.url && urlsSkipAuth.includes(config.url)) {
    return config;
  }

  const accessToken = await store.dispatch(authOperations.getAccessToken());

  if (accessToken) {
    const autharization = `Bearer ${accessToken.payload}`;

    config.headers = {
      ...config.headers,
      authorization: autharization,
    };
  }

  return config;
});

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    const isLoggedIn = !!store.getState().auth.token;

    if (
      error.response?.status === 401 &&
      isLoggedIn &&
      error.request.url !==
        'https://project-group-5-petly-back-end.vercel.app/api'
    ) {
      store.dispatch(authOperations.logOutUser());
    }

    throw error;
  }
);
