import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useParams } from "react-router-dom";
import { getMovie, resetMovie } from "./actions";

const IMAGE_URL = "https://image.tmdb.org/t/p/";
const BACKDROP_SIZE = "original";
const POSTER_SIZE = "w342";

const MovieDetail = ({ getMovie, resetMovie, isLoaded, movie }) => {
    const { id } = useParams();

    useEffect(() => {
        if (!isLoaded) getMovie(id);
        return () => {
            if (!isLoaded) resetMovie();
        };
    }, []);

    if (!movie.title) return null;

    return (
        <div>
            <img
                className="backdrop"
                src={`${IMAGE_URL}${BACKDROP_SIZE}${movie.backdrop_path}`}
                alt={`${movie.title} Backdrop`}
            />
            <div className="detail-details">
                <img
                    className="detail-poster"
                    src={`${IMAGE_URL}${POSTER_SIZE}${movie.poster_path}`}
                    alt={`${movie.title} Poster`}
                />
                <div>
                    <h1>{movie.title}</h1>
                    <p>{movie.overview}</p>
                    <ul>
                        {movie.genres?.map((genre) => (
                            <li key={genre.id}>{genre.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    movie: state.movies.movie,
    isLoaded: state.movies.movieLoaded,
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ getMovie, resetMovie }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
