import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './Componentes/Layout/Layout';
import Home from './Pages/home';

const App: React.FC = () => {

  return (
      <BrowserRouter>
      <Layout>
        <h1>
          Testando importação do layout
        </h1>
      </Layout>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
        </Routes>
      </BrowserRouter>
    );
};
  


export default App;
