import { Navigate, Route, Routes } from 'react-router-dom';

import { useAuthStore } from '../../hooks/useAuthStore';

import { LoginPage } from '../../pages/auth/Login';
import { SendNumberPage } from '../../pages/auth/SendNumber';
import { AuthPage } from '../../pages/auth/Auth';
import { PageNotFound } from '../../pages/PageNotFound';

export const AuthRoutes = () => {
  const { state, user } = useAuthStore();
  const { status } = user;
  return (
    <Routes>
      {state === 'login-not-athenticated' ? (
        <>
          <Route path="login" element={<LoginPage />} />
          <Route path="/*" element={<Navigate to="/auth/login" />} />
        </>
      ) : state === 'not-authenticated' && status === 'new' ? (
        <>
          <Route path="number" element={<SendNumberPage />} />
          <Route path="code" element={<AuthPage />} />
          <Route path="/*" element={<Navigate to="/auth/code" />} />
        </>
      ) : state === 'not-authenticated' && status === 'verified' ? (
        <>
          <Route path="code" element={<AuthPage />} />
          <Route path="/*" element={<Navigate to="/auth/code" />} />
        </>
      ) : (
        <>
          <Route path="*" element={<PageNotFound />} />
        </>
      )}
    </Routes>
  );
};
