import React from "react";
import Button from "../../components/button/Button";

const SortButtons = ({ onSort }) => {
  return (
    <div className="sort-buttons">
      <Button
        text="Title"
        onClick={() => onSort("title", false)}
        onDoubleClick={() => onSort("title", true)}
      />
      <Button
        text="Year"
        onClick={() => onSort("release_date", false)}
        onDoubleClick={() => onSort("release_date", true)}
      />
      <Button
        text="Rating"
        onClick={() => onSort("vote_average", false)}
        onDoubleClick={() => onSort("vote_average", true)}
      />
    </div>
  );
};

export default SortButtons;
