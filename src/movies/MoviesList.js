import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Filter } from "../Filter";
import { Movie } from "./Movie";

import { getMovies, getConfig } from "./actions";

const MoviesList = ({ movies, getMovies, config, getConfig, isLoaded, moviesLoadedAt }) => {
    const [filter, setFilter] = useState("");

    useEffect(() => {
        if (!isLoaded || ((new Date()) - new Date(moviesLoadedAt)) > 1000 * 60 * 60) {
            getMovies();
            getConfig();
        }
    }, [getConfig, getMovies, isLoaded, movies, moviesLoadedAt]);

    return (
        <>
            {!isLoaded && <h2>Loading...</h2>}
            <div className="content">
                <Filter filter={filter} setFilter={setFilter} />
                <ul className="movies-list">
                    {movies
                        ?.filter((movie) =>
                            movie.title
                                .toLowerCase()
                                .includes(filter.toLowerCase())
                        )
                        .map((movie) => (
                            <Movie
                                key={movie.id}
                                config={config}
                                movie={movie}
                            />
                        ))}
                </ul>
            </div>
        </>
    );
};

const mapStateToProps = (state) => ({
    movies: state.movies.movies,
    isLoaded: state.movies.moviesLoaded,
    moviesLoadedAt: state.movies.moviesLoadedAt,
    config: state.movies.config,
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ getMovies, getConfig }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
