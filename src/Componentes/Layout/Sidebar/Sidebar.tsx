import React from 'react';

import { Navlink } from 'react-router-dom';

import styles from './Sidebar.module.css';

const Sidebar () => {
    
    return (
        <div className={styles.sidebar}>
        <nav className={styles.navigation}>
        
        <ul>
            <li>
            <Navlink to= "/">
            <h3>Home</h3>
            </Navlink>
            </li>
        </ul>
        <h3>Currículo</h3>

        <ul>
            <li>
            <Navlink to= "/curriculo/cadastro/resumo">
            Cadastrar resumo            
            </Navlink>
            </li>

            <li>
            <Navlink to= "/curriculo/cadastro/experiencia-academica">
            Cadastrar Experiência Academica          
            </Navlink>
            </li>

            <li>
            <Navlink to= "/curriculo/cadastro/experiencia-profissional">
            Cadastrar Experiência Academica            
            </Navlink>
            </li>
        </ul>




        </nav>
        </div>
    );
};

export default Sidebar;