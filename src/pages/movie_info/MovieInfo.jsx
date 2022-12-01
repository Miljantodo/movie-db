import React, { useState, useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import YouTube from "react-youtube";
import "./MovieInfo.scss";

const MovieInfo = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();
  const navigate = useNavigate();
  const MOVIE_INFO_URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=2c5307e64a5afb0739b710c1a1d34857&append_to_response=videos`;
  const IMAGE_API = "http://image.tmdb.org/t/p/w500";

  useEffect(() => {
    fetch(MOVIE_INFO_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      });
  }, [MOVIE_INFO_URL, movieId]);

  console.log(movie);

  if (!movie) {
    return <ThreeDots />;
  }

  const renderTrailer = () => {
    const trailer = movie.videos.results.find((video) =>
      video.type.includes("Trailer")
    );
    return <YouTube videoId={trailer.key} />;
  };

  return (
    <>
      <div className="movie_details">
        <img src={IMAGE_API + movie.poster_path} alt={movie.title} />
        <div className="movie_info">
          <div className="movie_title">
            <h1>{movie.title} </h1>
            <button onClick={() => navigate(-1)}>Go back</button>
          </div>
          <h3>Release date: {movie.release_date}</h3>
          <div>
            <h2>Overview:</h2>
            <h4>{movie.overview}</h4>

            <div>
              <h4>Vote Count: {movie.vote_count}</h4>
              <h4>Vote Average: {movie.vote_average}</h4>
            </div>
          </div>
          <div className="movie_trailer">
            <h2>Watch Trailer</h2>
            <div>
              {movie.videos.results.find((video) =>
                video.type.includes("Trailer")
              )
                ? renderTrailer()
                : "Trailer not available."}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieInfo;
