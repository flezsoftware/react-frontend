import API from '../API';
import UserForm from './UserForm';
import React from 'react';

class EditUser extends UserForm {


    constructor(props) {
        super(props);
        this.AsyncGetUser();
        //this.GetUser();
        this.state = {
            id: '', username: '', password: '', email: ''
        }
    }

    GetUser() {
        const {match: {params}} = this.props;
        API.get(`/user/${params.id}`)
            .then(({data: user}) => {
                this.setState(user);
            });
    }

    async AsyncGetUser() {
        const {match: {params}} = this.props;
        const {data: user} = await API.get(`/user/${params.id}`);
        this.setState(user);
    }


    onSubmit = (e) => {
        e.preventDefault();
        const {id, username, password, email} = this.state;

        API.post('/user', {id, username, password, email})
            .then((result) => {
                this.props.history.push('/users');
            });
    }
    render() {
        return (
            <div><h4>Edycja użytkownika</h4>
                { super.render('Zapisz')}
            </div>
        );
    }
}

export default EditUser;