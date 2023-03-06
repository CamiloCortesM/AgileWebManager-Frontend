import { Navigate, Route, Routes } from "react-router-dom";
import { MannageAccounts } from "../pages/MannageAccounts";
import Profile from "../pages/Profile";

export const SettingRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="profile" element={<Profile />} />
        <Route path="mannage" element={<MannageAccounts />} />
        <Route path="/*" element={<Navigate to="/settings/profile" />} />
      </Routes>
    </>
  );
};
