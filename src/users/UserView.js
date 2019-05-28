import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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


function UserView(props) {
    const classes = useStyles();
    const { t } = useTranslation();
    return (
        <div>
            <form onSubmit={props.onSubmit}>
            <h4>{t(props.label)}</h4>
            <TextField
                label="Username"
                name="username"
                error={props.errors.username === undefined ? false : true}
                helperText={props.errors.username}
                className={classes.textField}
                value={props.user.username || ''}
                onChange={props.onChange}
            />
            <TextField
                label="Password"
                name="password"
                error={props.errors.password === undefined ? false : true}
                helperText={props.errors.password}
                className={classes.textField}
                value={props.user.password || ''}
                onChange={props.onChange}
            />
            <TextField
                label="Email"
                name="email"
                error={props.errors.email === undefined ? false : true}
                helperText={props.errors.email}
                className={classes.textField}
                value={props.user.email || ''}
                onChange={props.onChange}
            />
            <Button variant="contained" color="primary" type="submit">
                chuj CHUJ
            </Button>
            </form>
        </div>

    );
}

export default UserView;
