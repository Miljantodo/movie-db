import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import Movie from "../../components/movie/Movie";
import "./Search.css";

const API_URL =
  "https://api.themoviedb.org/3/search/movie?api_key=2c5307e64a5afb0739b710c1a1d34857";

const Search = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const location = useLocation();
  const term = new URLSearchParams(location.search).get("term");
  const pageLocation = `${API_URL}&page=${currentPage}&query=`;

  useEffect(() => {
    if (term === "") {
      navigate("/");
    } else {
      fetch(pageLocation + term)
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.results);
          setTotalPages(data.total_pages);
        });
    }
  }, [navigate, pageLocation, term]);

  useEffect(() => {
    setCurrentPage(1);
  }, [term]);

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

  if (movies.length > 0) {
    if (currentPage === 1 && totalPages === 1) {
      return (
        <>
          <div className="pag-sort">
            <h3>Sort By</h3>
            <div className="pag-sort-buttons">
              <div className="hidden">Previous Page</div>
              <div className="sort-buttons">
                <button
                  onClick={onTitleCLick}
                  onDoubleClick={onTitleCLickAgain}
                >
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
              Page {currentPage} / {totalPages}
            </h3>
          </div>
          <div className="movie-container">{renderMovies()}</div>
        </>
      );
    } else if (currentPage === 1 && totalPages > 1) {
      return (
        <>
          <div className="pag-sort">
            <h3>Sort By</h3>
            <div className="pag-sort-buttons">
              <div className="hidden">Previous Page</div>
              <div className="sort-buttons">
                <button
                  onClick={onTitleCLick}
                  onDoubleClick={onTitleCLickAgain}
                >
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
                  setCurrentPage((pages) => pages + 1);
                }}
              >
                Next Page
              </button>
            </div>
            <h3>
              Page {currentPage} / {totalPages}
            </h3>
          </div>
          <div className="movie-container">{renderMovies()}</div>
        </>
      );
    } else if (currentPage < totalPages) {
      return (
        <>
          <div className="pag-sort">
            <h3>Sort By</h3>
            <div className="pag-sort-buttons">
              <button
                className="pag-button-prev"
                onClick={() => {
                  setCurrentPage((pages) => pages - 1);
                }}
              >
                Previous Page
              </button>
              <div className="sort-buttons">
                <button
                  onClick={onTitleCLick}
                  onDoubleClick={onTitleCLickAgain}
                >
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
                  setCurrentPage((pages) => pages + 1);
                }}
              >
                Next Page
              </button>
            </div>
            <h3>
              Page {currentPage} / {totalPages}
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
                  setCurrentPage((pages) => pages - 1);
                }}
              >
                Previous Page
              </button>
              <div className="sort-buttons">
                <button
                  onClick={onTitleCLick}
                  onDoubleClick={onTitleCLickAgain}
                >
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
              Page {currentPage} / {totalPages}
            </h3>
          </div>
          <div className="movie-container">{renderMovies()}</div>
        </>
      );
    }
  }

  return (
    <>
      <div className="noMatches">
        <h3 className="noMatchesTitle">
          No matches. Try a different input or go back.
        </h3>
        <button
          type="button"
          className="noMatchesButton"
          onClick={() => navigate("/")}
        >
          Go back.
        </button>
      </div>
    </>
  );
};

export default Search;
