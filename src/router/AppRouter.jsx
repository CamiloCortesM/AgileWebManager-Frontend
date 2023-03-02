import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { TablePage } from "../table/pages/TablePage";

export const AppRouter = () => {
  // const state = "not-authenticated" 
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
