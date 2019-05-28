import React from 'react';

function OauthGoogleLogin() {

    return(
        <div>
            <h1>Google Login</h1>
            <form id="googleForm" action="/oauth2/authorization/google" method="post">
                <button type="submit" form="googleForm">Log in Google
                </button>
            </form>
        </div>

    );


}

export  default  OauthGoogleLogin;