import React from 'react';
import { Link } from 'react-router-dom';


const NavigationBar = ({}) => {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link to="/" className="navbar-brand">Red Dice</Link>
                </div>

                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="/signup">Sign Up</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}




//
// NavigationBar.propTypes = {
//     : React.PropTypes.
// };

export default NavigationBar;
