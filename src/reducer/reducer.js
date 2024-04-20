// reducer.js
import { LOAD_MOVIES } from './action';
import movieData from '../data/movie';

const initialState = {
    movies: movieData,
};

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        // Load : Movie data
        case LOAD_MOVIES:
            return {
                ...state,
                movies: action.payload,
            };
        default:
            return state;
    }
};

export default movieReducer;