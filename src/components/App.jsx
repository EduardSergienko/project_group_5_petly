import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ToastContainer, Slide } from 'react-toastify';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { authOperations, authSelectors } from '../redux/auth';
import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
// import { userOperations } from '../redux/user';

import 'react-toastify/dist/ReactToastify.css';
import SharedLayout from './SharedLayout/SharedLayout';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import Home from 'pages/Home';

const UserPage = lazy(() => import('../pages/UserPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const OurFriendsPage = lazy(() => import('pages/OurFriendsPage'));
const NewsPage = lazy(() => import('pages/NewsPage'));
const NoticesPage = lazy(() => import('pages/NoticesPage'));

export const App = () => {
  const token = useSelector(authSelectors.getUserToken);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(authOperations.getCurrentUser());
    }
  }, [dispatch, token]);

  return (
    <Suspense>
      <ReactNotifications />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route
            path="register"
            element={
              <PublicRoute restricted redirectPath="/user">
                <RegisterPage />
              </PublicRoute>
            }
          />

          <Route
            path="login"
            element={
              <PublicRoute restricted redirectPath="/user">
                <LoginPage />
              </PublicRoute>
            }
          />

          <Route
            path="friends"
            element={
              <PublicRoute>
                <OurFriendsPage />
              </PublicRoute>
            }
          />

          <Route
            path="user"
            element={
              <PrivateRoute path="/login">
                <UserPage />
              </PrivateRoute>
            }
          />

          <Route
            path="news"
            element={
              <PublicRoute>
                <NewsPage />
              </PublicRoute>
            }
          />

          <Route
            path="notices/:categoryName"
            element={
              <PublicRoute>
                <NoticesPage />
              </PublicRoute>
            }
          />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <ToastContainer autoClose={3000} transition={Slide} />
    </Suspense>
  );
};
