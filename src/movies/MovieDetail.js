import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BASE_URL = "https://api.themoviedb.org/3/movie/";
const IMAGE_URL = "https://image.tmdb.org/t/p/";
const BACKDROP_SIZE = "original";
const POSTER_SIZE = "w342";

export const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});

    const getMovie = useCallback(async () => {
        try {
            const response = await fetch(
                `${BASE_URL}${id}?api_key=${process.env.REACT_APP_MOVIE_API}`
            );
            const data = await response.json();
            setMovie(data);
        } catch (error) {
            console.error(error);
        }
    }, [id]);

    useEffect(() => {
        getMovie();
    }, [getMovie]);

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
