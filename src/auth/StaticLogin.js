import React from 'react';

function StaticLogin (){
        return (
            <div>
                <h1>Login</h1>
                <form id="loignForm" action="/login" method="post">
                    <div>
                        <input name='username' type="text"  id="username" />
                        <label    for="username">Username</label>
                    </div>
                    <div>
                        <input type="password"   name='password' id="userpass" />
                        <label for="userpass">Password</label>
                    </div>
                    <button type="submit" form="loignForm">Log in
                    </button>
                </form>
            </div>
        );
}

export default  StaticLogin;