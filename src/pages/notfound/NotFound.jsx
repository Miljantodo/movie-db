import React from "react";
import "./NotFound.css";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="fof">
        <h1>Error 404</h1>
        <h4>Page not found.</h4>
      </div>
      <div className="noMatches">
        <button
          type="button"
          className="noMatchesButton"
          onClick={() => navigate("/")}
        >
          Go back Home.
        </button>
      </div>
    </>
  );
};

export default NotFound;
