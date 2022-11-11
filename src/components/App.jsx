import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import SharedLayout from './SharedLayout/SharedLayout';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Home from 'pages/Home';
import LoginPage from 'pages/LoginPage';

// const LoginPage = lazy(() => import('pages/LoginPage'));
const UserPage = lazy(() => import('../pages/UserPage'));

export const App = () => {
  return (
    <Suspense fallback={'Loading...'}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route
          path="user"
          element={<PrivateRoute path="/login">{<UserPage />}</PrivateRoute>}
        />
      </Routes>
    </Suspense>
  );
};
