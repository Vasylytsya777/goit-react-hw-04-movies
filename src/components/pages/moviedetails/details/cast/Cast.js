import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchMovieCast } from "../../../../../api/api";
import CastStyled from "./CastStyled";

const Cast = () => {
  const [state, setState] = useState({});
  const location = useLocation();

  const getCast = async (id) => {
    const result = await fetchMovieCast(id);
    setState({ ...result });
  };

  useEffect(() => {
    getCast(location.state.movieId);
    // eslint-disable-next-line
  }, []);

  const { cast } = state;
  return (
    <CastStyled>
      <div className="cast">
        <ul className="cast__list">
          {cast &&
            cast.map((item) => (
              <li className="cast__list-item" key={item.id}>
                <img
                  className="cast__list-item-img"
                  src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                  alt={item.name}
                  width="100px"
                />
                <p className="cast__list-item-name"> {item.name}</p>
                <p className="cast__list-item-character">
                  Character: {item.character}
                </p>
              </li>
            ))}
        </ul>
      </div>
    </CastStyled>
  );
};

export default Cast;
