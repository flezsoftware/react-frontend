import React from 'react';
import API from '../API';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {withTranslation} from "react-i18next";
import {withStyles} from '@material-ui/styles';

const styles = {
    root: {
        width: '100%',
        marginTop: 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
};
class Users extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentWillMount() {
        this.getUsers();
    }

    getUsers = async () => {
        const {data: users} = await API.get("/user");
        if(users!=null)
        this.setState({users: users});
    };

    deleteUser = async (id) => {
        await API.delete(`/user/${id}`);
        this.getUsers();
    }

    render() {
        return (
            <Paper className={this.props.classes.root}>
                <Table className={this.props.classes.table}>
                    <TableHead>
                        <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Edit</TableCell>
                        <TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {this.state.users.map(home =>
                        <TableRow key={home.id}>
                            <TableCell>{home.id}</TableCell>
                            <TableCell>{home.username}</TableCell>
                            <TableCell>{home.email}</TableCell>
                            <TableCell>
                                <Link to={`/users/edit/${home.id}`}>
                                    <Button>Edit</Button>
                                </Link>
                            </TableCell>
                            <TableCell>
                                <Button onClick={() => this.deleteUser(home.id)}>Delete</Button>
                            </TableCell>
                        </TableRow>)}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

export default withStyles(styles)(withTranslation()(Users));
