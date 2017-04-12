import React from 'react';
import { connect } from 'react-redux';

import Main from '../components/Main';
import User from '../components/User';

import { changeName } from '../actions/userActions.js';


class App extends React.Component {

    render() {
        return (
            <div>
                <Main changeName={() => this.props.changeName('Jason Lee')}/>
                <User username={this.props.user.name}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer,
        math: state.mathReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeName: (name) => {
            dispatch(changeName(name));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
