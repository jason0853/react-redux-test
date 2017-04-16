import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';


import gameReducers from './reducers/gameReducers';

const store = createStore(
    combineReducers({
        games: gameReducers,
    }),
    composeWithDevTools(
        applyMiddleware(logger, thunk)
    ),
);

export default store;
