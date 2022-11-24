import React, { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import Movie from "../../components/movie/Movie";
import "../../components/movie/Movie.css";
import "./Home.scss";

const MOVIE_API =
  "https://api.themoviedb.org/3/discover/movie?api_key=2c5307e64a5afb0739b710c1a1d34857&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrat&page=";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetch(MOVIE_API + page)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setTotalPages(data.total_pages);
      });
  }, [page]);

  const renderMovies = () => {
    if (movies.length) {
      return movies.map((movie) => <Movie key={movie.id} {...movie} />);
    } else {
      return (
        <ThreeDots
          height="360"
          width="360"
          radius="9"
          color="#4fa94d"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      );
    }
  };

  const onTitleCLick = () => {
    let type = "title";
    const sorted = [...movies].sort((a, b) => a[type] > b[type]);
    setMovies(sorted);
  };
  const onTitleCLickAgain = () => {
    let type = "title";
    const sorted = [...movies].sort((a, b) => b[type] > a[type]);
    setMovies(sorted);
  };

  const onYearCLick = () => {
    let type = "release_date";
    const sorted = [...movies].sort((a, b) => b[type] > a[type]);
    setMovies(sorted);
  };
  const onYearCLickAgain = () => {
    let type = "release_date";
    const sorted = [...movies].sort((a, b) => a[type] > b[type]);
    setMovies(sorted);
  };

  const onRatingCLick = () => {
    let type = "vote_average";
    const sorted = [...movies].sort((a, b) => b[type] > a[type]);
    setMovies(sorted);
  };
  const onRatingCLickAgain = () => {
    let type = "vote_average";
    const sorted = [...movies].sort((a, b) => a[type] > b[type]);
    setMovies(sorted);
  };
  if (page === 1) {
    return (
      <>
        <div className="pag-sort">
          <h3>Sort By</h3>
          <div className="pag-sort-buttons">
            <div className="hidden">Previous Page</div>
            <div className="sort-buttons">
              <button onClick={onTitleCLick} onDoubleClick={onTitleCLickAgain}>
                Title
              </button>
              <button onClick={onYearCLick} onDoubleClick={onYearCLickAgain}>
                Year
              </button>
              <button
                onClick={onRatingCLick}
                onDoubleClick={onRatingCLickAgain}
              >
                Rating
              </button>
            </div>
            <button
              className="pag-button-next"
              onClick={() => {
                setPage((pages) => pages + 1);
              }}
            >
              Next Page
            </button>
          </div>
          <h3>
            Page {page} / {totalPages}
          </h3>
        </div>
        <div className="movie-container">{renderMovies()}</div>
      </>
    );
  } else if (page < totalPages) {
    return (
      <>
        <div className="pag-sort">
          <h3>Sort By</h3>
          <div className="pag-sort-buttons">
            <button
              className="pag-button-prev"
              onClick={() => {
                setPage((pages) => pages - 1);
              }}
            >
              Previous Page
            </button>
            <div className="sort-buttons">
              <button onClick={onTitleCLick} onDoubleClick={onTitleCLickAgain}>
                Title
              </button>
              <button onClick={onYearCLick} onDoubleClick={onYearCLickAgain}>
                Year
              </button>
              <button
                onClick={onRatingCLick}
                onDoubleClick={onRatingCLickAgain}
              >
                Rating
              </button>
            </div>
            <button
              className="pag-button-next"
              onClick={() => {
                setPage((pages) => pages + 1);
              }}
            >
              Next Page
            </button>
          </div>
          <h3>
            Page {page} / {totalPages}
          </h3>
        </div>
        <div className="movie-container">{renderMovies()}</div>
      </>
    );
  } else {
    return (
      <>
        <div className="pag-sort">
          <h3>Sort By</h3>
          <div className="pag-sort-buttons">
            <button
              className="pag-button-prev"
              onClick={() => {
                setPage((pages) => pages - 1);
              }}
            >
              Previous Page
            </button>
            <div className="sort-buttons">
              <button onClick={onTitleCLick} onDoubleClick={onTitleCLickAgain}>
                Title
              </button>
              <button onClick={onYearCLick} onDoubleClick={onYearCLickAgain}>
                Year
              </button>
              <button
                onClick={onRatingCLick}
                onDoubleClick={onRatingCLickAgain}
              >
                Rating
              </button>
            </div>
            <div className="hidden">Next Page</div>
          </div>
          <h3>
            Page {page} / {totalPages}
          </h3>
        </div>
        <div className="movie-container">{renderMovies()}</div>
      </>
    );
  }
};
export default Home;
