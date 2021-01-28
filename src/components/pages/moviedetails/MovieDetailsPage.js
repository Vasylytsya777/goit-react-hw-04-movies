import React, { useState, useEffect, Suspense } from "react";
import {
  NavLink,
  Route,
  Switch,
  useHistory,
  useLocation,
  useRouteMatch,
} from "react-router-dom";
import { fetchMovieDetails } from "../../../api/api";
import moviesDetailsRoutes from "../../../routes/MoviesDetailsRouters";
import LoaderSpinner from "../../loader/LoaderSpinner";
import MovieDetailsStyled from "./MovieDetailsStyled";

const MovieDetailsPage = () => {
  const [state, setState] = useState({});
  const match = useRouteMatch();
  const history = useHistory();
  const location = useLocation();

  const getMovieDetails = async (id) => {
    const result = await fetchMovieDetails(id);

    setState({ ...result });
  };
  useEffect(() => {
    getMovieDetails(history.location.state.movieId);
    // eslint-disable-next-line
  }, []);

  const goBack = () => {
    if (!location.state.query) {
      history.push(`/`);
    } else {
      history.push(
        //location.state.from
        {
          pathname: location.state.from,
          search: `?query=${location.state.query}`,
          state: {
            from: location.pathname,
            query: location.state.query,
          },
        }
      );
    }
  };

  const {
    id,
    poster_path,
    title,
    release_date,
    vote_average,
    overview,
    genres,
  } = state;

  return (
    <MovieDetailsStyled>
      <div className="details">
        <button className="details-btn" type="button" onClick={goBack}>
          Go Back
        </button>
        <div className="details__info">
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : title
            }
            alt={title}
            width="250px"
          />
          <div className="details__info-description">
            <h2 className="details__info-title">
              {title} ({release_date && release_date.slice(0, 4)})
            </h2>
            <span className="details__info-list">
              User score: {vote_average * 10}%
            </span>
            <h3 className="details__info-title">Overview</h3>
            <span className="details__info-list">{overview}</span>
            <h3 className="details__info-title">Genres</h3>
            <ul className="details__info-genre">
              {genres &&
                genres.map((item) => (
                  <li className="details__info-genre-item" key={item.id}>
                    {item.name}
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="inform">
          <h4 className="details__info-title">Additional information</h4>
          <ul className="inform__list">
            {moviesDetailsRoutes.map(({ name, path, exact }) => (
              <li className="inform__list-item" key={`${id}${name}`}>
                <NavLink
                  to={{
                    pathname: `${match.url}${path}`,
                    state: { ...location.state },
                  }}
                  exact={exact}
                  className="inform__list-item-link"
                  activeClassName="active-info-link"
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <Suspense fallback={<LoaderSpinner />}>
          <Switch>
            {moviesDetailsRoutes.map(({ path, exact, component }) => (
              <Route
                path={`${match.url}${path}`}
                exact={exact}
                key={`${id}${path}`}
                component={component}
              />
            ))}
          </Switch>
        </Suspense>
      </div>
    </MovieDetailsStyled>
  );
};

export default MovieDetailsPage;
