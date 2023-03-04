import { Route, Routes } from 'react-router-dom';
import { TablePage } from '../table';
import { TodoPages } from '../todos';
import { Navbar } from '../ui';

export const AuthenticateRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<TablePage />} />
        <Route path='/todos' element={<TodoPages />} />
      </Routes>
    </>
  )
}
