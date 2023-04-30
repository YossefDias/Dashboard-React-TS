import React from "react";

import Header from './Header.ts';
import Footer from './Footer.ts';
import Sidebar from './Sidebar.ts';

import Styles from "./Layout.module.css"

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className={Styles.container}>
            <Header />
            <div className={Styles.main}>
                <Sidebar />
                <div className={Styles.content}><{children}</div>
            </div>
            <Footer />
        </div>
    );  
}

export default Layout;