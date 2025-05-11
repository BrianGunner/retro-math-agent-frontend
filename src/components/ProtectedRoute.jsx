import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem('access_token');
  if (!token) {
    // No token? Redirect to login.
    return <Navigate to="/login" replace />;
  }
  // Otherwise render the protected component
  return children;
}
