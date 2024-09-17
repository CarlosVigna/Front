import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CadastroUsuario from './pages/CadastroUsuario/cadastro'; 
import Contas from './pages/Contas/contas';
import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<CadastroUsuario />} />
        <Route path="/contas" element={<Contas />} />

      </Routes>
    </Router>
  </StrictMode>
);
