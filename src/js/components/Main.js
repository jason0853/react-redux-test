import React from 'react';

const Main = ({changeName}) => {
    return (
        <div>
            <h1>Main Page</h1>
            <button onClick={() => changeName('Jason Lee')}>
                Change the username
            </button>
        </div>
    );
}

export default Main;
