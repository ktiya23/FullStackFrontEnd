import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('authToken'); // Retrieve token from localStorage

  // If no token, redirect to login page
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // If authenticated, allow access to the children (e.g., product page)
  return children;
};

export default PrivateRoute;
