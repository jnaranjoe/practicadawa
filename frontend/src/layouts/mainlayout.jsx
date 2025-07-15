import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar.jsx';

const MainLayout = () => {
  return (
    <div>
      <Navbar /> {/* El Navbar se renderizará aquí */}
      <div>
        <Outlet /> {/* Aquí se renderizará el contenido de la ruta hija */}
      </div>
    </div>
  );
};

export default MainLayout;