import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavigationBar from '../components/NavigationBar';
import App from '../containers/App';
import SignupPage from '../components/signup/SignupPage';

const Routes = () => {
    return (
        <Router>
            <div className="container">
                <NavigationBar />
                <Route exact path="/" component={App} />
                <Route path="/signup" component={SignupPage} />
            </div>
        </Router>
    );
}

export default Routes;
