import React from "react";
import useAppContext from "../../hooks/useAppContext.js";
import "./Switch.scss";

const Switch = () => {
  const { listView, setListView } = useAppContext();

  return (
    <div className="container">
      <div className="buttons">
        <button>
          <i className="fa fa-th-large"></i>
        </button>
        <label className="switch">
          <input
            type="checkbox"
            onChange={() => {
              setListView(!listView);
            }}
          />
          <span className="slider"></span>
        </label>
        <button>
          <i className="fa fa-list"></i>
        </button>
      </div>
    </div>
  );
};

export default Switch;
