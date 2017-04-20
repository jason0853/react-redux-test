import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';
import * as types from './types';

export function setCurrentUser(user) {
    return {
        type: types.SET_CURRENT_USER,
        payload: user
    }
}

export function login(data) {
    return dispatch => {
        return axios.post('/api/auth', data).then(res => {
            const token = res.data.token;
            localStorage.setItem('jwtToken', token);
            setAuthorizationToken(token);
            dispatch(setCurrentUser(jwt.decode(token)));
            // console.log(jwt.decode(token))
        });
    }
}
