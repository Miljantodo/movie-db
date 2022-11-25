import React from "react";

const PreviousButton = ({ setPage }, previousPageVisible) => {
  return (
    <button
      className={previousPageVisible ? "pag-button-prev" : "hidden"}
      onClick={() => {
        setPage((pages) => pages - 1);
      }}
    >
      Previous Page
    </button>
  );
};

export default PreviousButton;
