import React from 'react';
import API from '../API';
import {Link} from 'react-router-dom';

class Users extends React.Component {

    constructor(props) {
        super(props);
        this.setState({users: []});
        this.getUsers();
    }

    async getUsers() {
        const {data: users} = await API.get("/user");
        if(users!=null)
        this.setState({users: users});
    };

    deleteUser = async (id) => {
        await API.delete(`/user/${id}`);
        this.getUsers();
    }

    state = {
        users: []
    };

    render() {
        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.users.map(home =>
                        <tr key={home.id}>
                            <td>{home.id}</td>
                            <td>{home.username}</td>
                            <td>{home.email}</td>
                            <td>
                                <Link to={`/users/edit/${home.id}`}>
                                    <button>Edit</button>
                                </Link>
                            </td>
                            <td>
                                <button onClick={() => this.deleteUser(home.id)}>Delete</button>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Users;
