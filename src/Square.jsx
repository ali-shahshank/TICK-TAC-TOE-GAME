import React from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square btn btn-light rounded-0 border-1 border-dark" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default Square;
