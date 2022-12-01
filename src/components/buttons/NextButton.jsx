import React from "react";

const NextButton = ({ setPage }, nextPageVisible) => {
  return (
    <button
      className={nextPageVisible ? "pag-button-next" : "hidden"}
      onClick={() => {
        setPage((pages) => pages + 1);
      }}
    >
      Next Page
    </button>
  );
};

export default NextButton;
