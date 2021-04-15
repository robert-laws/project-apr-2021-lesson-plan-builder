import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated, isLoading, ...props }) => {
  if (isLoading) {
    return <div>loading...</div>;
  }

  if (!isAuthenticated) {
    return <Redirect to='/' />;
  }

  return <Route {...props} />;
};

export default ProtectedRoute;
