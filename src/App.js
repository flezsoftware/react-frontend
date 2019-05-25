import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import  Users from './users/Users';
import Home from './Home';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';

function App() {
    return (

        <Router>
            <div>
                <nav>
                    <div><Link to="/home">Home</Link></div>
                    <div><Link to="/users">Users</Link></div>
                    <div><Link to="/users/add">Add User</Link></div>
                </nav>

                <Route exact path="/home" component={Home} />
                <Route exact path="/users" component={Users} />
                <Route exact path="/users/add" component={AddUser} />
                <Route exact path="/users/edit/:id" component={EditUser} />
            </div>
        </Router>

    );
}

export default App;
