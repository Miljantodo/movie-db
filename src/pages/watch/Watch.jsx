import React from "react";
import { useLocation } from "react-router-dom";

const Watch = () => {
  const location = useLocation();
  const term = new URLSearchParams(location.search).get("term");
  console.log(term);

  return <div>aaaaaa</div>;
};

export default Watch;
