import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import SharedLayout from './SharedLayout/SharedLayout';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Home from 'pages/Home';

const UserPage = lazy(() => import('../pages/UserPage'));

export const App = () => {
  return (
    <Suspense fallback={'Loading...'}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
        </Route>

        <Route
          path="user"
          element={<PrivateRoute path="/login">{<UserPage />}</PrivateRoute>}
        />
      </Routes>
    </Suspense>
  );
};
