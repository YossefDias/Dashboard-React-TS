import React from "react";

import { NavLink } from "react-router-dom";
import styles from './Sidebar.module.css'

const Sidebar = () => {
    return (
        <div className={styles.Sidebar}>
            <nav className={styles.active}>
                {/* <h3>Geral</h3> */}
            <ul>
                <li>
                    <NavLink to="/"className={styles.active}>
                        <h3>Home</h3>
                    </NavLink>
                </li>
            </ul>
            <h3>Currículo</h3>
            <ul>
                <li>
                    <NavLink to="/curriculo/informações/cadastro" className={styles.active}>
                    Cadastrar informações
                    </NavLink>                  
                </li>         
                <li>
                    <NavLink to="/curriculo/experiencia/cadastro" className={styles.active}>
                    Cadastrar Experiência
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/curriculo/experiencia/lista" className={styles.active}>
                    Listagem de Experiências
                    </NavLink>
                </li>
            </ul> 
            <h3>Portfólio</h3>
            <ul>
                <li>
                <NavLink to="/portfolio/cadastro" className={styles.active}>
                    Cadastrar Portifolio  
                </NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio/listagem" className={styles.active}>
                    Listagem de Portfolios
                    </NavLink>
                </li>    
            </ul>  
        </nav>
    </div>
    );
};

export default Sidebar; 