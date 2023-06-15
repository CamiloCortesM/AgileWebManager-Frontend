import { Navigate, Route, Routes } from "react-router-dom";

import { useAuthStore } from "../../hooks/useAuthStore";

import { LoginPage } from "../../pages/auth/Login";
import { SendNumberPage } from "../../pages/auth/SendNumber";
import { AuthPage } from "../../pages/auth/Auth";
import { ChangePasswordPage } from "../../pages/auth/ChangePassword";



export const AuthRoutes = () => {
  const { state, user } = useAuthStore();
  const { phone } = user;
  return (
    <Routes>
      {state === "not-authenticated" ? (
        <>
          <Route path="login" element={<LoginPage />} />
          <Route path="/*" element={<Navigate to="/auth/login" />} />
        </>
      ) : state === "login-not-athenticated" && !phone ? (
        <>
          <Route path="number" element={<SendNumberPage />} />
          <Route path="/*" element={<Navigate to="/auth/number" />} />
        </>
      ) : state === "login-not-athenticated" && !!phone ? (
        <>
          <Route path="code" element={<AuthPage />} />
          <Route path="/*" element={<Navigate to="/auth/code" />} />
        </>
      ) : (
        <>
          <Route path="password" element={<ChangePasswordPage />} />
          <Route path="/*" element={<Navigate to="/auth/password" />} />
        </>
      )}
    </Routes>
  );
};
