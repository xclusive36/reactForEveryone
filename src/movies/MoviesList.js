import React, { useState, useEffect } from "react";
import { Filter } from "../Filter";
import { Movie } from "./Movie";

const API_URL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4b6858b949f6606af133139121d19491&page=1";
const CONFIG_URL =
    "https://api.themoviedb.org/3/configuration?api_key=4b6858b949f6606af133139121d19491";

export const MoviesList = () => {
    const [filter, setFilter] = useState("");
    const [movies, setMovies] = useState([]);
    const [config, setConfig] = useState({});

    const getMovies = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setMovies(data.results);
        } catch (error) {
            console.error(error);
        }
    };

    const getConfig = async () => {
        try {
            const response = await fetch(CONFIG_URL);
            const data = await response.json();
            setConfig(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getConfig();
        getMovies();
    }, []);

    return (
        <div>
            <Filter filter={filter} setFilter={setFilter} />
            <ul className="movies-list">
                {movies
                    ?.filter((movie) =>
                        movie.title.toLowerCase().includes(filter.toLowerCase())
                    )
                    .map((movie) => (
                        <Movie key={movie.id} config={config} movie={movie} />
                    ))}
            </ul>
        </div>
    );
};
