import React from 'react';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {Layout} from './Componentes/Layout';
import Home from './Pages/home';
import CadastrarInformacoes from './Pages/curriculo/Cadastrarinformacoes';
 
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