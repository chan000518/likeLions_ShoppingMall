import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';

export const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20 g-origin-border min-h-screen">
        <Outlet />
      </div>
    </>
  );
};
