import React from 'react';

class UserForm extends React.Component {

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    render(buttonName) {
        const {username, password, email} = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={this.onChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="text"
                        name="password"
                        value={password}
                        onChange={this.onChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        value={email}
                        onChange={this.onChange}
                    />
                </div>
                <button type="submit">{buttonName}</button>
            </form>
        );
    }

}

export default UserForm;