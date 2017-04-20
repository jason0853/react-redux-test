import _ from 'lodash';
import * as types from '../actions/types';


const initialState = {
    isAuthenticated: false,
    user: {}
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_CURRENT_USER:
            return {
                isAuthenticated: !_.isEmpty(action.payload),
                user: action.payload
            }
            break;
        default: return state;

    }
}

export default authReducer;
