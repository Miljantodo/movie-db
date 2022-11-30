import React from "react";
import { useParams } from "react-router-dom";

const Watch = () => {
  const { movieId } = useParams();
  console.log(movieId);

  return (
    <div>
      <div></div>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Watch;
