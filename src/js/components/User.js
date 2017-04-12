import React from 'react';
import PropTypes from 'prop-types';

const User = ({username}) => (
    <div>
        <h1>User Page</h1>
        <p>username: {username}</p>
    </div>
);

User.propTypes = {
    username: PropTypes.string.isRequired
};


export default User;
