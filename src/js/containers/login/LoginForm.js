import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TextFieldGroup from '../../components/common/TextFieldGroup';
import validateInput from '../../../../server/shared/validations/login';
import { login } from '../../actions/authAction';


class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            identifier: '',
            password: '',
            errors: {},
            isLoading: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    isValid() {
        const { errors, isValid } = validateInput(this.state);

        if (!isValid) {
            this.setState({ errors });
        }

        return isValid;
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.isValid()) {
            this.setState({ errors: {}, isLoading: true });
            this.props.login(this.state)
            .then((res) => this.props.history.push('/'))
            .catch((err) => this.setState({ errors: err.response.data.errors, isLoading: false }));
        }
    }

    render() {

        const { errors, identifier, password, isLoading } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Login</h1>

                { errors.form && <div className="alert alert-danger">{errors.form}</div> }

                <TextFieldGroup
                    field="identifier"
                    label="Username / Email"
                    value={identifier}
                    error={errors.identifier}
                    onChange={this.handleChange}
                />
                <TextFieldGroup
                    field="password"
                    label="Password"
                    value={password}
                    error={errors.password}
                    onChange={this.handleChange}
                    type="password"
                />
                <div className="form-group">
                    <button className="btn btn-primary btn-lg" disabled={isLoading}>Login</button>
                </div>
            </form>
        );
    }

}

LoginForm.propTypes = {
    login: PropTypes.func.isRequired
}

export default connect(null, { login })(LoginForm);
