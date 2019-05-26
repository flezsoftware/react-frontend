import React from 'react';
import './App.css';
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";


function App() {
    const { t } = useTranslation();
    return (
            <div>
                <h2>{t('AppName')}</h2>
                <nav>
                    <div><Link to="/home">Home</Link></div>
                    <div><Link to="/login">Login</Link></div>
                    <div><Link to="/users">Users</Link></div>
                    <div><Link to="/users/add">Add User</Link></div>
                </nav>
            </div>
    );
}

export default App;
