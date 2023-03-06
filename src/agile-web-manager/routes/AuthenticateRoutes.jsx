import { Navigate, Route, Routes } from 'react-router-dom';
import { TablePage } from '../table';
import { TodoPages } from '../todos';

export const AuthenticateRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<TablePage />} />
        <Route path='/table/:id' element={<TodoPages />} />
        <Route path='/*' element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}
