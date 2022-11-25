import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import Movie from "../../components/movie";
import "./Search.scss";
import SortButtons from "../../components/buttons/SortButtons";

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

  const onSort = (type = "title", reverse = false) => {
    const sorted = [...movies].sort((a, b) =>
      !reverse ? a[type] > b[type] : b[type] > a[type]
    );
    setMovies(sorted);
  };

  if (movies.length > 0) {
    const previousPageVisible = currentPage > 1;
    const nextPageVisible = currentPage < totalPages;

    return (
      <>
        <div className="pag-sort">
          <h3>Sort By</h3>
          <div className="pag-sort-buttons">
            <button
              className={previousPageVisible ? "pag-button-prev" : "hidden"}
              onClick={() => {
                setCurrentPage((pages) => pages - 1);
              }}
            >
              Previous Page
            </button>
            <SortButtons onSort={onSort} />
            <button
              className={nextPageVisible ? "pag-button-next" : "hidden"}
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
