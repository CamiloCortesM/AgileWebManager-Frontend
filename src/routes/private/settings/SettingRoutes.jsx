import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuthStore } from '../../../hooks/useAuthStore';

import { Profile } from '../../../pages/app/Profile';
import { ManageAccount } from '../../../pages/app/ManageAccount';

export const SettingRoutes = () => {
  const { user } = useAuthStore();
  const { role } = user;
  return (
    <>
      {role === 'admin' ? (
        <Routes>
          <Route path="profile" element={<Profile />} />
          <Route path="manage" element={<ManageAccount />} />
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
