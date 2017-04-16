import axios from 'axios';

export function fetchGames() {
    return dispatch => {
        // fetch('/api/games');
        axios('/api/games');
    }
}
