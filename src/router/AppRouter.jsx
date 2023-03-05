import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthenticateRoutes } from "../agile-web-manager";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { useAuthStore } from "../hooks/useAuthStore";
import "./style.css";

export const AppRouter = () => {
  const { state, checkAuthToken } = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, []);

  if (state === "checking") {
    return (
      <div class="loading">
        <div class="spinner"></div>
      </div>
    );
  }

  return (
    <Routes>
      {state === "authenticated" ? (
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
