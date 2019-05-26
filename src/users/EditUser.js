import API from '../API';
import UserForm from './UserForm';
import React from 'react';
import {withTranslation} from 'react-i18next';

class EditUser extends UserForm {
    constructor(props) {
        super(props);
        this.AsyncGetUser();
    }

    async AsyncGetUser() {
        const {match: {params}} = this.props;
        const {data: response} = await API.get(`/user/${params.id}`);
        this.setState(prevState => ({
            user: response
        }));
    }

    render() {
        const {t} = this.props;
        return (
            <div><h4>{t('EditUser')}</h4>
                {super.render('Zapisz')}
            </div>
        );
    }
}

export default withTranslation()(EditUser);