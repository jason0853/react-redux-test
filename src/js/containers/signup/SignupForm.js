import React from 'react';
import _ from 'lodash';

import timezones from '../../data/timezones';

class SignupForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirm: '',
            timezone: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        const options = _.map(timezones, (val, key) =>
            <option key={val} value={val}>{key}</option>
        );
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Join our community!</h1>
                <div className="form-group">
                    <label className="control-label">Username</label>
                    <input
                        value={this.state.username}
                        onChange={this.handleChange}
                        type="text"
                        name="username"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label className="control-label">Email</label>
                    <input
                        value={this.state.email}
                        onChange={this.handleChange}
                        type="text"
                        name="email"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label className="control-label">Password</label>
                    <input
                        value={this.state.password}
                        onChange={this.handleChange}
                        type="password"
                        name="password"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label className="control-label">Password Confirm</label>
                    <input
                        value={this.state.passwordConfirm}
                        onChange={this.handleChange}
                        type="password"
                        name="passwordConfirm"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
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
                </div>



                <div className="form-group">
                    <button className="btn btn-primary btn-lg">Sign Up</button>

                </div>
            </form>
        );
    }

}

export default SignupForm;
