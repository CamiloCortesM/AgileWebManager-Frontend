import { Navigate, Route, Routes } from "react-router-dom";
import { ManageAccounts } from "../pages/ManageAccounts";
import Profile from "../pages/Profile";

export const SettingRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="profile" element={<Profile />} />
        <Route path="manage" element={<ManageAccounts />} />
        <Route path="/*" element={<Navigate to="/settings/profile" />} />
      </Routes>
    </>
  );
};
