import React from "react";
import useAppContext from "../../hooks/useAppContext";
import { useNavigate } from "react-router-dom";
import "./Movie.scss";

const IMAGE_API = "http://image.tmdb.org/t/p/w500";

const setVoteColor = (vote) => {
  if (vote >= 7.5) return "green";
  else if (vote >= 6) return "orange";
  else return "red";
};

const Movie = ({
  title,
  poster_path,
  overview,
  vote_average,
  release_date = "TBD",
}) => {
  const { listView } = useAppContext();
  const navigate = useNavigate();

  if (listView === false) {
    return (
      <div className="movie" onClick={() => navigate(`/movie?term=${title}`)}>
        <img
          className="image"
          src={
            poster_path
              ? IMAGE_API + poster_path
              : "https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bW92aWV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
          }
          alt={title}
        />
        <div className="movie-info">
          <h3>{title}</h3>
          <span className="tag">{release_date.slice(0, 4)}</span>
        </div>
        <div className="movie-overview">
          <h2>Overview</h2>
          <span className={`tag ${setVoteColor(vote_average)}`}>
            {vote_average}
          </span>
          <p>{overview}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="movie-info-list"
        onClick={() => navigate(`/movie?term=${title}`)}
      >
        <div className="list-top">
          <h3>{title}</h3>
          <div className={`tag ${setVoteColor(vote_average)}`}>
            {vote_average}
          </div>
        </div>
        <span className="tag">{release_date.slice(0, 4)}</span>
      </div>
    );
  }
};

export default Movie;
