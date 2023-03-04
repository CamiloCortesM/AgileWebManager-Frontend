import { Navigate, Route, Routes } from "react-router-dom";
import { AuthenticateRoutes } from "../agile-web-manager";
import { AuthRoutes } from "../auth/routes/AuthRoutes";

export const AppRouter = () => {
  const state = "not-authenticated";

  if (state === "checking") {
    return <h3>Cargando...</h3>;
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
