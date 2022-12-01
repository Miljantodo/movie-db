import React from "react";

const Button = ({ text, onClick, onDoubleClick }) => {
  return (
    <button onClick={onClick} onDoubleClick={onDoubleClick}>
      {text}
    </button>
  );
};

export default Button;
