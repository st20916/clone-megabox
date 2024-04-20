// Action
// Load
export const LOAD_MOVIES = 'LOAD_MOVIES';

export const loadMovies = (movies) => {
    return {
        type: LOAD_MOVIES,
        payload: movies,
    };
};