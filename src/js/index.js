import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import jwt from 'jsonwebtoken';
import { setCurrentUser } from './actions/authAction';

import Routes from './routes/Routes';
import store from './store';
import setAuthorizationToken from './utils/setAuthorizationToken';


if (localStorage.jwtToken) {
    setAuthorizationToken(localStorage.jwtToken);
    store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)))
}

render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('app')
);
