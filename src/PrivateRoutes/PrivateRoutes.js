import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const PrivateRoutes = ({ children, ...rest }) => {
  const { isAuth } = useAuth();

  return isAuth ? <Outlet /> : <Navigate to="/signup" />;
};

export default PrivateRoutes;
