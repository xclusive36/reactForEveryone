import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import { save, load } from "redux-localstorage-simple";

import MoviesList from "./movies/MoviesList";
import MovieDetail from "./movies/MovieDetail";
import Toggle from "./toggle/Toggle";

import "./App.css";

const middleware = [logger, thunk];

const store = createStore(
    rootReducer,
    load(),
    composeWithDevTools(applyMiddleware(...middleware, save()))
);

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Toggle />
                <Routes>
                    <Route path="/" element={<MoviesList />} />
                    <Route path="/movie/:id" element={<MovieDetail />} />
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
