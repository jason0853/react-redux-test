import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavigationBar from '../components/NavigationBar';
import FlashMessagesList from '../containers/flash/FlashMessagesList';
import App from '../containers/App';
import SignupPage from '../containers/signup/SignupPage';
import LoginPage from '../containers/login/LoginPage'

const Routes = () => {
    return (
        <Router>
            <div className="container">
                <NavigationBar />
                <FlashMessagesList />
                <Route exact path="/" component={App} />
                <Route path="/signup" component={SignupPage} />
                <Route path="/login" component={LoginPage} />
            </div>
        </Router>
    );
}

export default Routes;
