const gameReducers = (state = [], action) => {
    switch (action.type) {
        case 'SET_GAMES_FULFILLED':
            return action.payload;
        default: return state;
    }
};

export default gameReducers;
