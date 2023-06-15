import { Navigate, Route, Routes } from 'react-router-dom';

import { SettingRoutes } from './settings/SettingRoutes';
import { TodoPages } from '../../pages/app/Todo';
import { TablePage } from '../../pages/app/Table';


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
