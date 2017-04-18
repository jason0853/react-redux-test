import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import classnames from 'classnames';

import timezones from '../../data/timezones';
import validateInput from '../../../../server/shared/validations/signup';
import TextFieldGroup from '../../components/common/TextFieldGroup';

class SignupForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirm: '',
            timezone: '',
            errors: {},
            isLoading: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
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
            this.props.userSignupRequest(this.state)
            .then((res) => this.props.history.push('/') )
            .catch((err) => this.setState({ errors: err.response.data, isLoading: false }));
        }
    }

    render() {
        const { errors } = this.state;
        const options = _.map(timezones, (val, key) =>
            <option key={val} value={val}>{key}</option>
        );
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Join our community!</h1>

                <TextFieldGroup
                    field="username"
                    value={this.state.username}
                    label="Username"
                    error={errors.username}
                    onChange={this.handleChange}
                />

                <TextFieldGroup
                    field="email"
                    value={this.state.email}
                    label="Email"
                    error={errors.email}
                    onChange={this.handleChange}
                />

                <TextFieldGroup
                    field="password"
                    value={this.state.password}
                    label="Password"
                    error={errors.password}
                    type="password"
                    onChange={this.handleChange}
                />

                <TextFieldGroup
                    field="passwordConfirm"
                    value={this.state.passwordConfirm}
                    label="Password Confirm"
                    error={errors.passwordConfirm}
                    type="password"
                    onChange={this.handleChange}
                />

                <div className={classnames('form-group', { 'has-error': errors.timezone })}>
                    <label className="control-label">Timezones</label>
                    <select
                        className="form-control"
                        name="timezone"
                        onChange={this.handleChange}
                        value={this.state.timezone}
                    >
                        <option value=""  disabled>Choose Your Timezone</option>
                        {options}
                    </select>
                    {errors.passwordConfirm && <span className="help-block">{errors.timezone}</span>}
                </div>

                <div className="form-group">
                    <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">Sign Up</button>
                </div>
            </form>
        );
    }

}

SignupForm.propTypes = {
    userSignupRequest: PropTypes.func.isRequired
}

export default SignupForm;
