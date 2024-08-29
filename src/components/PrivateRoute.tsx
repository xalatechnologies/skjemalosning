import React from 'react';
import { Navigate } from 'react-router-dom';
import { getSession } from '../services/sessionService';

interface PrivateRouteProps {
  element: React.ReactElement;
  allowedRoles: string[];
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, allowedRoles }) => {
  const session = getSession();

  if (!session) {
    return <Navigate to="/" replace />;
  }

  if (!allowedRoles.includes(session.role)) {
    return <Navigate to="/" replace />;
  }

  return element;
};

export default PrivateRoute;
