import React from 'react';

import styles from './Header.module.css';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
            <h1>dasboard-react-ts</h1>
            </div>
        </header>
    );
};
export default Header