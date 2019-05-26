import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Users from './users/Users';
import Home from './Home';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import Login from './auth/Login';
import {BrowserRouter, Route} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import i18n from './i18n';

import {I18nextProvider} from 'react-i18next';

ReactDOM.render(<BrowserRouter>
    <I18nextProvider i18n={i18n}>
    <App/>
    <Route exact path="/login" component={Login}/>
    <Route exact path="/home" component={Home}/>
    <Route exact path="/users" component={Users}/>
    <Route exact path="/users/add" component={AddUser}/>
    <Route exact path="/users/edit/:id" component={EditUser}/>
    </I18nextProvider>
</BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
