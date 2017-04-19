import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import FlashMessage from './FlashMessage';
import { deleteFlashMessage } from '../../actions/flashMessageActions';

class FlashMessagesList extends React.Component {

    render() {
        const message = this.props.message.map((val, i) =>
            <FlashMessage
                key={val.id}
                message={val}
                deleteFlashMessage={this.props.deleteFlashMessage}
            />
        );
        return (
            <div>{message}</div>
        );
    }

}

FlashMessagesList.propTypes = {
    message: PropTypes.array.isRequired,
    deleteFlashMessage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    return {
        message: state.flashMessage
    }
};

export default connect(mapStateToProps, { deleteFlashMessage })(FlashMessagesList)
