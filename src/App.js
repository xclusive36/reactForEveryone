import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { MoviesList } from "./movies/MoviesList";
import { MovieDetail } from "./movies/MovieDetail";

import "./App.css";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MoviesList />} />
                <Route path="/movie/:id" element={<MovieDetail />} />
            </Routes>
        </Router>
    );
}

export default App;
