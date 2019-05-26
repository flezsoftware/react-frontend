import React from 'react';
import {withTranslation} from "react-i18next";
import UserForm from "./UserForm";

class AddUser extends  UserForm {
    render() {
        const {t} = this.props;
        return (
            <div><h4>{t('AddUser')}</h4>
                {super.render('Dodaj')}
            </div>
        );
    }
}

export default withTranslation()(AddUser);