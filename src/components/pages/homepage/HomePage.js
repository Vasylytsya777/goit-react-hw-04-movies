import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { fetchTrending } from "../../../api/api";
import HomeStyled from "./HomeStyled";

const HomePage = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchTrending().then((response) => {
      setTrendMovies([...response]);
    });
  }, []);
  return (
    <HomeStyled>
      <div className="homepage">
        <h2 className="homepage_title">Trending today</h2>
        <ul className="trending__list">
          {trendMovies.map((movie, index) => (
            <li className="trending__list-item" key={`${movie.id}${index}`}>
              <NavLink
                className="trending__list-link"
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: {
                    from: location.pathname,
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
    </HomeStyled>
  );
};

export default HomePage;
