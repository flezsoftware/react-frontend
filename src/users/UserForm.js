import React from 'react';
import FormValidator from "../validation/FormValidator";
import API from "../API";

class UserForm extends FormValidator {

    constructor(props){
        super(props);
        this.state = {
            user : { username: '', password: '', email: '' } ,
            errors : { username: '', password: '', email: '' }
        }
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

    render(buttonName) {
        return (
            <form onSubmit={this.onSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={this.state.user.username}
                        onChange={this.onChange}
                    />
                    <span>{this.state.errors.username}</span>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="text"
                        name="password"
                        value={this.state.user.password}
                        onChange={this.onChange}
                    />
                    <span>{this.state.errors.password}</span>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        value={this.state.user.email}
                        onChange={this.onChange}
                    />
                    <span>{this.state.errors.email}</span>
                </div>
                <button type="submit">{buttonName}</button>
            </form>
        );
    }

}

export default UserForm;