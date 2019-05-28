import API from '../API';
import React from 'react';
import {withTranslation} from 'react-i18next';
import {withStyles} from '@material-ui/styles';
import UserForm from "./UserFormMaterial";
import DataSource from "./DataSource";
import UserView from "./UserView";
import FormValidator from "../validation/FormValidator";

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
class EditUser extends FormValidator {
    constructor(props) {
        super(props);
       this.loadData = this.loadData.bind(this);
       this.state = {
           user: { username: '', password: '', email: '' },
           errors : { username: '', password: '', email: '' }
       };
    }

    async componentWillMount() {
       console.log("1");
        this.loadData();
    }

    async componentDidMount() {

        DataSource.addChangeListener(this.loadData);
    }

    componentWillUnmount() {
        DataSource.removeChangeListener(this.loadData);
    }

     loadData = async () => {
        const {match: {params}} = this.props;
       const restUser = await DataSource.getUser(params.id);
       this.setState(prevState => ({
           user: restUser
       }));
    }

    onChange = (e) => {
        const {name,value} = e.target;
        this.setState(prevState => ({
            user: {
                ...prevState.user,
                [name]: value
            }
        }));
    }

    validateErrors(error) {
        this.setState(prevState => ({
            errors: { username: '', password: '', email: '' }
        }));
        return super.validateErrors(error, this.props.t)
    }

    onSubmit = (e) => {
        e.preventDefault();
        API.post('/user', this.state.user)
            .then((result) => {
                this.props.history.push('/users');
            }).catch((error) => {
            if(error.response.status === 400){
                this.validateErrors(error);
            }
        });
    }

    render() {
        const {t} = this.props;
        const {user,errors} = this.state;
        return (
                <UserView user={user} errors={errors} onChange={this.onChange} label={'EditUser'} onSubmit={this.onSubmit} />
        );
    }
}

export default withTranslation()(EditUser);