import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import SharedLayout from './SharedLayout/SharedLayout';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Home from 'pages/Home';

const UserPage = lazy(() => import('../pages/UserPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
=======
const OurFriendsPage = lazy(() => import('pages/OurFriendsPage'));
>>>>>>> Stashed changes
const NewsPage = lazy(() => import('pages/NewsPage'));
>>>>>>> Stashed changes
const OurFriendsPage = lazy(() => import('pages/OurFriendsPage'));

export const App = () => {
  return (
    <Suspense fallback={'Loading...'}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
<<<<<<< Updated upstream
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/friends" element={<OurFriendsPage />} />
=======
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
            path="/friends" 
            element={<OurFriendsPage />
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
            path="/friends" 
            element={<OurFriendsPage />} 
          />

          <Route
            path="news"
            element={
              <PublicRoute>
                <NewsPage />
              </PublicRoute>
            }
          />
>>>>>>> Stashed changes
        </Route>

        <Route
          path="user"
          element={<PrivateRoute path="/login">{<UserPage />}</PrivateRoute>}
        />
      </Routes>
    </Suspense>
  );
};
