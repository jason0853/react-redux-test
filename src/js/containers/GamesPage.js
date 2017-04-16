import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchGames } from '../actions/gameActions.js'

import GamesList from '../components/GamesList';


class GamesPage extends React.Component {

    render() {
        return (
            <div>
                <h2>Games List</h2>
                <GamesList games={this.props.games}/>
            </div>
        );
    }

    componentDidMount() {
        this.props.fetchGames();
    }

}

GamesPage.propTypes = {
    games: PropTypes.array.isRequired,
    fetchGames: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        games: state.games
    }
}

export default connect(mapStateToProps, { fetchGames })(GamesPage);
