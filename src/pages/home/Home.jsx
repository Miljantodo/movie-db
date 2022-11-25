import React, { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import Movie from "../../components/movie";
import "../../components/movie/Movie.scss";
import "./Home.scss";
import SortButtons from "../../components/buttons/SortButtons";

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

  const onSort = (type = "title", reverse = false) => {
    const sorted = [...movies].sort((a, b) =>
      !reverse ? a[type] > b[type] : b[type] > a[type]
    );
    setMovies(sorted);
  };

  if (movies.length > 0) {
    const previousPageVisible = page > 1;
    const nextPageVisible = page < totalPages;
    return (
      <>
        <div className="pag-sort">
          <h3>Sort By</h3>
          <div className="pag-sort-buttons">
            <button
              className={previousPageVisible ? "pag-button-prev" : "hidden"}
              onClick={() => {
                setPage((pages) => pages - 1);
              }}
            >
              Previous Page
            </button>
            <SortButtons onSort={onSort} />
            <button
              className={nextPageVisible ? "pag-button-next" : "hidden"}
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
  }
};
export default Home;
