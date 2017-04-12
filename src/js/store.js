import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import mathReducer from './reducers/mathReducer';
import userReducer from './reducers/userReducer';

const store =  createStore(
    combineReducers({
        mathReducer,
        userReducer
    }),
    applyMiddleware(logger)
);

export default store;

// store.subscribe(() => {
//     // console.log(store.getState());
// });

// store.dispatch({
//     type: 'ADD',
//     payload: 100
// });
//
// store.dispatch({
//     type: 'SUBTRACT',
//     payload: 50
// });
//
// store.dispatch({
//     type: 'CHANGE_USER',
//     payload: 'Jason Lee'
// });
//
// store.dispatch({
//     type: 'CHANGE_JOB',
//     payload: 'Full-stack engineer'
// });
