import { Navigate, Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <Routes>
      {state === "not-authenticated" ? (
        <>
          <Route path="/auth/*" element={<LoginPage />} />
          <Route path="/*" element={<Navigate to="auth/login" />} />
        </>
      ) : (
        <>
          <Route path="/" element={<TablePage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  );
};
