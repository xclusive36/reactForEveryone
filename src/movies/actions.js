const API_URL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=1&api_key=";
const CONFIG_URL = "https://api.themoviedb.org/3/configuration?api_key=";

export const GET_MOVIES = "GET_MOVIES";
export const GET_MOVIE = "GET_MOVIE";
export const GET_CONFIG = "GET_CONFIG";
export const RESET_MOVIE = "RESET_MOVIE";

const BASE_URL = "https://api.themoviedb.org/3/movie/";

export const getMovies = () => async (dispatch) => {
    const response = await fetch(API_URL + process.env.REACT_APP_MOVIE_API);
    const movies = await response.json();
    return dispatch({
        type: GET_MOVIES,
        data: movies.results,
    });
};

export const getMovie = (id) => async (dispatch) => {
    const response = await fetch(
        `${BASE_URL}${id}?api_key=${process.env.REACT_APP_MOVIE_API}`
    );
    const movie = await response.json();
    return dispatch({
        type: GET_MOVIE,
        data: movie,
    });
};

export const getConfig = () => async (dispatch) => {
    const response = await fetch(CONFIG_URL + process.env.REACT_APP_MOVIE_API);
    const config = await response.json();
    return dispatch({
        type: GET_CONFIG,
        data: config,
    });
};

export const resetMovie = () => async (dispatch) => {
    return dispatch({
        type: RESET_MOVIE,
        data: {},
    });
};