import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SignupForm from './SignupForm';
import { userSignupRequest } from '../../actions/userActions';

class SignupPage extends React.Component {


    render() {

        const { userSignupRequest, history } = this.props;

        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <SignupForm
                        userSignupRequest={userSignupRequest}
                        history={history}
                    />
                </div>
            </div>
        );
    }
}

SignupForm.propTypes = {
    userSignupRequest: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
};

export default connect(null, { userSignupRequest })(SignupPage);
