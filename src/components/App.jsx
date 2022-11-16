import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SharedLayout from './SharedLayout/SharedLayout';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import Home from 'pages/Home';
import AdaptiveImage from 'components/AdaptiveImage';
import Loader from 'components/Loader';

const UserPage = lazy(() => import('../pages/UserPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const NewsPage = lazy(() => import('pages/NewsPage'));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route
            path="register"
            element={
              <PublicRoute restricted redirectPath="/user">
                <RegisterPage />
                <AdaptiveImage />
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
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <ToastContainer autoClose={3000} transition={Slide} />
    </Suspense>
  );
};
