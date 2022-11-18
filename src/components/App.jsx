import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import SharedLayout from './SharedLayout/SharedLayout';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import Home from 'pages/Home';
import AdaptiveImage from 'components/AdaptiveImage/AdaptiveImage';

const UserPage = lazy(() => import('../pages/UserPage'));
const NoticesPage = lazy(() => import('../pages/NoticesPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));

export const App = () => {
  return (
    <Suspense fallback={'Loading...'}>
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

          <Route path="notices/:categoryName"
            element={
              // <PublicRoute restricted >
                <NoticesPage />
              // </PublicRoute>
            }
            />
          {/* <Route path='notices'>
            <Route path="sell"
            element={
              // <PublicRoute restricted >
                <NoticesPage />
              // </PublicRoute>
            }
            />
            <Route path="own"
            element={
              // <PublicRoute restricted >
                <NoticesPage />
              // </PublicRoute>
            }
            />
            <Route path="lost-found"
            element={
              // <PublicRoute restricted >
                <NoticesPage />
              // </PublicRoute>
            }
            />
            <Route path="favorite"
            element={
              // <PublicRoute restricted >
                <NoticesPage />
              // </PublicRoute>
            }
            />
            <Route path="for-free"
            element={
              // <PublicRoute restricted >
                <NoticesPage />
              // </PublicRoute>
            }
          />
          </Route> */}
        </Route>

        

        <Route
          path="user"
          element={
            <PrivateRoute path="/login">
              <UserPage />
            </PrivateRoute>
          }
        />

        

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};
