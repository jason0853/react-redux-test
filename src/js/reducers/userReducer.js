const userReducer = (state = {
    name: 'Jaesung',
    age: 32,
    job: 'Front-end Engineer'
}, action) => {
    switch (action.type) {
        case 'CHANGE_USER':
            state = {
                ...state,
                name: action.payload
            }
            break;
        case 'CHANGE_JOB':
            state = {
                ...state,
                job: action.payload
            }
            break;

    }

    return state;
};

export default userReducer;
