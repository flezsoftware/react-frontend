import React from 'react';
import FormValidator from "../validation/FormValidator";
import API from "../API";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class UserFormMaterial extends FormValidator {

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

    render(buttonName) {
        console.log(this.props.classes.container);
        return (
            <div  className={this.props.classes.container}>
                <form onSubmit={this.onSubmit}>
                    <TextField
                        label="Username"
                        name="username"
                        error={this.state.errors.username === '' ? false : true}
                        helperText={this.state.errors.username}
                        className={this.props.classes.textField}
                        value={this.state.user.username}
                        onChange={this.onChange}
                    />
                    <TextField
                        label="Password"
                        name="password"
                        error={this.state.errors.password === '' ? false : true}
                        helperText={this.state.errors.password}
                        className={this.props.classes.textField}
                        value={this.state.user.password}
                        onChange={this.onChange}
                    />
                    <TextField
                        label="Email"
                        name="email"
                        error={this.state.errors.email === '' ? false : true}
                        helperText={this.state.errors.email}
                        className={this.props.classes.textField}
                        value={this.state.user.email}
                        onChange={this.onChange}
                    />
                    <Button variant="contained" color="primary" type="submit">
                        {buttonName}
                    </Button>

                </form>
            </div>
        );
    }

}

export default UserFormMaterial;
/*
export default withStyles(useStyles)(UserForm);*/
