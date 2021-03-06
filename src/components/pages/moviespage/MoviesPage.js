import React, { useState, useEffect } from "react";
import {
  NavLink,
  useHistory,
  useLocation,
  useRouteMatch,
} from "react-router-dom";
import { fetchMovies } from "../../../api/api";
import MoviesPageStyled from "./MoviesPageStyled";

const initialState = {
  searchMovies: [],
  query: "",
  serching: "false",
};
const MoviesPage = () => {
  const [state, setState] = useState({ ...initialState });
  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch();

  const onHandleChange = (e) => {
    const { value } = e.target;
    setState({ query: value, serching: "true" });
  };

  const getMovies = async (query) => {
    const result = await fetchMovies(query);
    //console.log("getMovies result", result);

    setState((prev) => ({
      ...prev,
      searchMovies: [...result],
    }));
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    getMovies(state.query);
    history.push({
      pathname: location.pathname,
      search: `?query=${state.query}`,
    });
  };

  useEffect(() => {
    if (!location.state) {
      return;
    } else {
      location.state.query &&
        getMovies(location.state.query).then(() =>
          setState((prev) => ({ ...prev, ...location.state }))
        );
    }
    // eslint-disable-next-line
  }, []);

  const { searchMovies, query } = state;

  return (
    <MoviesPageStyled>
      <div className="movies">
        <h2 className="movies__title">Movies</h2>
        <form className="movies__form" onSubmit={onFormSubmit}>
          <input
            className="movies__form-input"
            type="text"
            placeholder="Search movies"
            onChange={onHandleChange}
            value={query}
          />
          <button type="submit" className="movies__form-btn">
            <span className="movies__form-btn-label">Search</span>
          </button>
        </form>
        <ul className="movies__search-list">
          {searchMovies &&
            searchMovies.map((movie, index) => (
              <li
                className="movies__search-list-item"
                key={`${movie.id}${index}`}
              >
                <NavLink
                  className="movies__search-list-link"
                  to={{
                    pathname: `${match.url}/${movie.id}`,

                    state: {
                      from: location.pathname,
                      query: query,
                      movieId: movie.id,
                    },
                  }}
                >
                  {movie.title}
                </NavLink>
              </li>
            ))}
        </ul>
      </div>
    </MoviesPageStyled>
  );
};

export default MoviesPage;
