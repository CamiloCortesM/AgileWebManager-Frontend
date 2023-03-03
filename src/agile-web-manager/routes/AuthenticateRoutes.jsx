import { Route, Routes } from 'react-router-dom';
import { TablePage } from '../table';
import { Navbar } from '../ui';

export const AuthenticateRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<TablePage />} />
      </Routes>
    </>
  )
}
