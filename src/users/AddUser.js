import API from '../API';
import UserForm from './UserForm';
import React from 'react';

class AddUser extends UserForm {

    constructor(props) {
        super(props);
        this.state = {
            username: '', password: '', email: ''
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        const {username, password, email} = this.state;

        API.post('/user', {username, password, email})
            .then((result) => {
                this.props.history.push('/users');
            });
    }
    render() {
        return (
            <div><h4>Dodawanie użytkownika</h4>
                { super.render('Dodaj')}
            </div>
        );
    }
}

export default AddUser;