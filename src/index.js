import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
const audience=`https://${domain}/api/v2/`
const scope="read:current_user update:current_user_metadata"


ReactDOM.render(
  <BrowserRouter>
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
    audience={audience}
    scope={scope}

    >


       <App/>
  </Auth0Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
