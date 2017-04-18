import React from 'react';
import { render } from 'react-dom';
// import { BroswerRouter as Router } from 'react-router-dom';

// import App from './containers/App';

import Routes from './routes/Routes';

render(
    <Routes />,
    document.getElementById('app')
);
