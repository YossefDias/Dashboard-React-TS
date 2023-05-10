import React from 'react';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {Layout} from './Componentes/Layout';
import Home from './Pages/home';
import CadastrarExperiencia from './Pages/curriculo/Cadastrarexperiencias/CadastrarExperiencia';
import CadastrarPortfolio from './Pages/portfolio/CadastrarPortfolio/CadastrarPortfolio';
import CadastrarInformacoes from './Pages/curriculo/Cadastrarinformacoes/CadastrarInformacoes';
import ListaPortfolio from './Pages/portfolio/ListaPortfolio/ListaPortfolio';
import ListaExperiencia from './Pages/curriculo/Listaexperiencia/ListaExperiencias';
import Input from './Componentes/forms/Input/Input';

const App: React.FC = () => {
  return (
    <BrowserRouter>
         <Layout>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/curriculo/informacoes/cadastro" element={<CadastrarInformacoes />} />
               <Route path="/curriculo/experiencia/cadastro" element={<CadastrarExperiencia />} />
               <Route path="/portfolio/listagem" element={<ListaPortfolio />} />
               <Route path="/portfolio/cadastro" element={<CadastrarPortfolio />} />
               <Route path="/curriculo/ListaExperiencias/ListaExperiencia" element={<ListaExperiencia />} />
            </Routes>
         </Layout>
      </BrowserRouter>
  )
};

export default App;