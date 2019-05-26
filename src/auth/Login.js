import React from 'react';
import qs from 'qs';
import API from '../API';
import StaticLogout from './StaticLogout';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginForm: {
                username: '',
                password: ''
            },
            user: {}
        }
        this.handleChange = this.handleChange.bind(this)
        this.login = this.login.bind(this);
        this.getUserDetails = this.getUserDetails.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState(prevState => ({
            loginForm: {
                ...prevState.loginForm,
                [name]: value
            }
        }));
    }

    login() {
        const data = qs.stringify({
            'username': this.state.loginForm.username,
            'password': this.state.loginForm.password
        });
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        };
        API.post(
            'login',
            data,
            headers
        ).then((response) => {
            API.get(`user/principal`).then(({data: principal}) => {
                console.log(principal);
                this.setState(prevState => ({
                    user: principal
                }));


            })
        })
            .catch(function (response) {
                console.log(response);
            });
    }

    async getUserDetails() {
        const {data: user} = await API.get(`user/principal`);
        return user;
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Login</h1>
                    <div className="container">
                        loginForm Name: <input type="text" name="username" value={this.state.loginForm.username}
                                               onChange={this.handleChange}/>
                        Password: <input type="password" name="password" value={this.state.loginForm.password}
                                         onChange={this.handleChange}/>
                        <button className="btn btn-success" onClick={this.login}>Login</button>
                    </div>
                    <div>
                        <pre>{JSON.stringify(this.state.user, null, 2)}</pre>
                    </div>
                </div>
                <StaticLogout/>
            </div>
        )
    }
}

export default Login;