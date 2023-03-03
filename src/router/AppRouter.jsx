import { Navigate, Route, Routes } from "react-router-dom";
import { AuthenticateRoutes } from "../agile-web-manager";
import { LoginPage } from "../auth/pages/LoginPage";

export const AppRouter = () => {
  const state = "authenticated" 
  return (
    <Routes>
      {state === "not-authenticated" ? (
        <>
          <Route path="/auth/*" element={<LoginPage />} />
          <Route path="/*" element={<Navigate to="auth/login" />} />
        </>
      ) : (
        <>
          <Route path="/*" element={<AuthenticateRoutes />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  );
};
