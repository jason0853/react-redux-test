import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import userReducer from './reducers/userReducer';


const store = createStore(
    combineReducers({
        user: userReducer
    }),
    composeWithDevTools(
        applyMiddleware(logger, thunk, promise())
    )
);

export default store;
