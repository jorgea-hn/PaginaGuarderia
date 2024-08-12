import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import Home from './components/pages/Home.tsx';
import Admisiones from './components/pages/Admisiones.tsx';
import Egresados from './components/pages/Egresados.tsx';
import Contacto from './components/pages/Contacto.tsx';
import QuienesSomos from './components/pages/QuienesSomos.tsx';
import Niveles from './components/pages/Niveles.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quienesSomos" element={<QuienesSomos />} />
        <Route path="/niveles" element={<Niveles />} />
        <Route path="/admisiones" element={<Admisiones />} />
        <Route path="/egresados" element={<Egresados />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
