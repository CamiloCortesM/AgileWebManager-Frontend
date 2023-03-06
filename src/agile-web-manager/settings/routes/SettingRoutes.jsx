import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthStore } from "../../../hooks/useAuthStore";
import { ManageAccounts } from "../pages/ManageAccounts";
import Profile from "../pages/Profile";

export const SettingRoutes = () => {
  const { user } = useAuthStore();
  const { role } = user;
  return (
    <>
      {role === "admin" ? (
        <Routes>
          <Route path="profile" element={<Profile />} />
          <Route path="manage" element={<ManageAccounts />} />
          <Route path="/*" element={<Navigate to="/settings/profile" />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="profile" element={<Profile />} />
          <Route path="/*" element={<Navigate to="/settings/profile" />} />
        </Routes>
      )}
    </>
  );
};
