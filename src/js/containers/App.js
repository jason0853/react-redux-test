import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import GamesPage from './GamesPage';

class App extends React.Component {

    render() {
        return (
            <Router>
                <div>
                    <h1>React App</h1>
                    <Link to="/games">Games</Link>
                    <Route path="/games" component={GamesPage} />
                </div>
            </Router>
        );
    }

}

export default App;
