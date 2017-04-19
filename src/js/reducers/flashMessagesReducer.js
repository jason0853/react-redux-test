import shortid from 'shortid';
import * as types from '../actions/types';
import _ from 'lodash';

const initialState = [];

const flashMessagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_FLASH_MESSAGE:
            return [
                ...state,
                {
                    id: shortid.generate(),
                    type: action.payload.type,
                    text: action.payload.text
                }
            ];
        case types.DELETE_FLASH_MESSAGE:
            const index = _.findIndex(state, { id: action.payload });
            if (index >= 0) {
                return [
                    ...state.slice(0, index),
                    ...state.slice(index + 1)
                ]
            }
            return state;

        default: return state;
    }
}

export default flashMessagesReducer;
