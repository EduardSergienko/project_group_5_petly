// import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// import { authSelector } from 'redux/auth';

export default function PrivateRoute({ children, path }) {
  //   const isLoggedIn = useSelector(authSelector.getIsLoggedIn);
  //   return isLoggedIn ? children : <Navigate to={`${path}`} />;
  return children;
}
