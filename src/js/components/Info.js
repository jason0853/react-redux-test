import React from 'react';
import PropTypes from 'prop-types';

class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            price: props.appleProduct.price
        }

    }

    onClick() {
        this.setState({
            price: this.state.price - 500000
        })
    };

    render() {
        let list = this.props.sports.map((sport, i) => <li key={i}>{sport}</li>);
        return (
            <div>
                {this.props.name}, {this.props.age}
                <ul>
                    {list}
                </ul>
                <p>{this.props.appleProduct.name} / {this.state.price}won</p>
                <button onClick={this.onClick.bind(this)}>discount</button>
                {this.props.children}
            </div>
        );
    }

}

Info.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    sports: PropTypes.array.isRequired,
    appleProduct: PropTypes.object.isRequired,
    children: PropTypes.element.isRequired,
};

export default Info;
