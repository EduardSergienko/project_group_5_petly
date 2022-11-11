import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import SharedLayout from './SharedLayout/SharedLayout';
import Home from 'pages/Home';
import LoginPage from 'pages/LoginPage';

// const LoginPage = lazy(() => import('pages/LoginPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};
