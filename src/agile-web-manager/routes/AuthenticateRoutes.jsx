import { Navigate, Route, Routes } from 'react-router-dom';
import { SettingRoutes } from '../settings/routes/SettingRoutes';
import { TablePage } from '../table';
import { TodoPages } from '../todos';

export const AuthenticateRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<TablePage />} />
        <Route path='/table/:id' element={<TodoPages />} />
        <Route path='/settings/*' element={<SettingRoutes />} />
        <Route path='/*' element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}
