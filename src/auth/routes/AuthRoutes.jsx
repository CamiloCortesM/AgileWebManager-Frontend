import { Navigate, Route, Routes } from "react-router-dom";
import { AuthPage } from "../pages/AuthPage";
import { ChangePasswordPage } from "../pages/ChangePasswordPage";
import { LoginPage } from "../pages/LoginPage";
import { NumberPage } from "../pages/NumberPage";

export const AuthRoutes = () => {
  const state = "user-new"; // "not-authenticated" "login-not-athenticated" "login-not-athenticated"
  const phone = '3209932148' // value or null (undefined)

  return (
    <Routes>
      {state === "not-authenticated" ? (
        <>
          <Route path="login" element={<LoginPage />} />
          <Route path="/*" element={<Navigate to="/auth/login" />} />
        </>
      ) : state === "login-not-athenticated" && phone === null ? (
        <>
          <Route path="number" element={<NumberPage />} />
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
