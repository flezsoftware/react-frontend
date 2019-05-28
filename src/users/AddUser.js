import React from 'react';
import {withStyles} from '@material-ui/styles';
import UserForm from "./UserFormMaterial";
import {withTranslation} from "react-i18next";

const styles =  {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
      //  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    },
    textField: {
        marginLeft: 5,
        marginRight: 5,
        width: 200,
    },
};

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

export default withStyles(styles)(withTranslation()(AddUser));