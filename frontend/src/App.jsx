import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Login from './pages/login'
import Usuarios from './pages/usuarios'
import MainLayout from './layouts/mainlayout'

function App() {

  return (
    <Routes>
      <Route index path='/login' element={<Login/>}/>
      {/* Rutas que SÍ necesitan el Navbar, anidadas bajo MainLayout */}
      <Route path="/system" element={<MainLayout />}>
        {/* La ruta con index renderiza el componente por defecto cuando la ruta padre es "/" */}
        {/* <Route index element={<Home />} /> */}
        <Route path="usuarios" element={<Usuarios />} />
        {/* Agrega aquí cualquier otra ruta que deba mostrar el Navbar */}
      </Route>
    </Routes>
  )
}

export default App
