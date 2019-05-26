import React from 'react';

function StaticLogout (){
    return (
        <div>
            <h1>Logout</h1>
            <form id="logoutForm" action="/logout" method="post">
                <button type="submit" form="logoutForm">Log out
                </button>
            </form>
        </div>
    );
}

export default  StaticLogout;