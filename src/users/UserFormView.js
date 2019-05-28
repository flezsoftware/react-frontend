import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import API from "../API";
import FormValidator from "../validation/FormValidator";

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
}));

const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];



function UserFormView() {
    const constructor = () => {

    }
    const classes = useStyles();
    const [values, setValues] = React.useState({
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
    });

    const state = {
        user : { username: '', password: '', email: '' } ,
        errors : { username: '', password: '', email: '' }
    }

   const onChange = (e) => {
        const {name,value} = e.target;
        React.setState(prevState => ({
            user: {
                ...prevState.user,
                [name]: value
            }
        }));
    }

    const validateErrors = (error) => {

    }

    const onSubmit = (e) => {
        e.preventDefault();
        API.post('/user', state.user)
            .then((result) => {
                this.props.history.push('/users');
            }).catch((error) => {
            if(error.response.status === 400){
                this.setState(prevState => ({
                    errors: { username: '', password: '', email: '' }
                }));
                return FormValidator.validateErrors(error, this.props.t)
            }
        });
    }



    return (
        <div  className={classes.container}>{classes.container}
            <form onSubmit={onSubmit}>
                <TextField
                    label="Username"
                    name="username"
                    error={state.errors.username === '' ? false : true}
                    helperText={state.errors.username}
                    className={classes.textField}
                    onChange={onChange}
                />
                <TextField
                    label="Password"
                    name="password"
                    error={state.errors.password === '' ? false : true}
                    helperText={state.errors.password}
                    className={classes.textField}
                    onChange={onChange}
                />
                <TextField
                    label="Email"
                    name="email"
                    error={state.errors.email === '' ? false : true}
                    helperText={state.errors.email}
                    className={classes.textField}
                    onChange={onChange}
                />
                <Button variant="contained" color="primary" type="submit">
                    chuj CHUJ
                </Button>

            </form>
        </div>
    );
}

export default UserFormView;