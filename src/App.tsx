import React from 'react';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import CadastrarInformacoes from './pages/Curriculo/CadastrarInformacoes';
 
const App: React.FC = () => {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/curriculo/informações/cadastro" element={<CadastrarInformacoes />} />
      </Routes>
    </Layout>
   </BrowserRouter>
  )
};

export default App;