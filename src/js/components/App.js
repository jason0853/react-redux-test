import React from 'react';
import PropTypes from 'prop-types';

import Info from './Info.js';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            number: this.state.number + 1
        });
    }

    render() {
        let finishText = '';
        let sports = ['swimming', 'basketball']
        let appleProduct = {
            name: 'macbook',
            price: 2000000
        }
        if (this.state.number) {
            finishText = <p>It's over</p>
        }
        return (
            <div>
                <h1>{this.props.title}</h1>
                <div>{this.state.number}</div>
                <button onClick={this.onClick}>Increase</button>
                <div>{finishText}</div>
                <div>
                    <Info name={"Jason"} age={32} sports={sports} appleProduct={appleProduct}>
                        <strong>React Genius</strong>
                    </Info>
                    {/* <Info name={"Sophie"} age={28} sports={sports} /> */}
                </div>
            </div>
        );
    }
}

App.propTypes = {
    title: PropTypes.string.isRequired
};

export default App;
