import { GET_CONFIG, GET_MOVIES, GET_MOVIE, RESET_MOVIE } from "./actions";

const initialState = {
    movies: [],
    moviesLoaded: false,
    moviesLoadedAt: null,
    movie: {},
    movieLoaded: false,
    config: {},
};

const defaultFunction = (state = initialState, action) => {
    const { type, data } = action;
    switch (type) {
        case GET_MOVIES:
            return {
                ...state,
                movies: data,
                moviesLoaded: true,
                moviesLoadedAt: new Date()
            };
        case GET_MOVIE:
            return {
                ...state,
                movie: data,
                movieLoaded: true,
            };
        case GET_CONFIG:
            return {
                ...state,
                config: data,
            };
        case RESET_MOVIE:
            return {
                ...state,
                movie: data,
                movieLoaded: false,
            };
        default:
            return state;
    }
};

export default defaultFunction;
