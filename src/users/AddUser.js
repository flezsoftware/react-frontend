import API from '../API';
import UserForm from './UserForm';
import React from 'react';
import {withTranslation} from "react-i18next";

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
        const {t} = this.props;
        return (
            <div><h4>{t('AddUser')}</h4>
                { super.render('Dodaj')}
            </div>
        );
    }
}

export default withTranslation()(AddUser);