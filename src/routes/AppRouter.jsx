import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { AuthRoutes } from './public/AuthRoutes';
import { AuthenticateRoutes } from './private/AuthenticateRoutes';

import { useAuthStore } from '../hooks/useAuthStore';

import './styles.css';

export const AppRouter = () => {
  const { state, checkAuthToken } = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, []);

  if (state === 'checking') {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <Routes>
      {state === 'authenticated' ? (
        <>
          <Route path="/*" element={<AuthenticateRoutes />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </>
      ) : (
        <>
          <Route path="/auth/*" element={<AuthRoutes />} />
          <Route path="/*" element={<Navigate to="auth/login" />} />
        </>
      )}
    </Routes>
  );
};
