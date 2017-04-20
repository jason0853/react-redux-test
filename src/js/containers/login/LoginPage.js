import React from 'react';
import LoginForm from './LoginForm';

class LoginPage extends React.Component {

    render() {

        const { history } = this.props
        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <LoginForm
                        history={history}
                    />
                </div>
            </div>
        );
    }

}

export default LoginPage;
