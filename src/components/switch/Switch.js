import React from "react";
import { useContext } from "react";
import { Context } from "../../App.js";
import "./Switch.css";

const Switch = () => {
  const {listView, setListView} = useContext(Context);

  return (
    <div className="container">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
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
