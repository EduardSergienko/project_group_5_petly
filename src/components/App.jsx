import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import SharedLayout from './SharedLayout/SharedLayout';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Home from 'pages/Home';

const UserPage = lazy(() => import('../pages/UserPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const OurFriendsPage = lazy(() => import('pages/OurFriendsPage'));

export const App = () => {
  return (
    <Suspense fallback={'Loading...'}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/friends" element={<OurFriendsPage />} />
        </Route>

        <Route
          path="user"
          element={<PrivateRoute path="/login">{<UserPage />}</PrivateRoute>}
        />
      </Routes>
    </Suspense>
  );
};
