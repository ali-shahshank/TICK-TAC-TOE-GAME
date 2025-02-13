import React, { useState } from "react";
import Board from "./Board";  
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";


export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

function handleReset() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)} className="btn btn-light">{description}</button>
      </li>
    );
  });

  return (
    
<div className="container-fluid">
<div className="row">
  <div className="col-sm-12 col-md-12 p-4 bg-light"></div>
  <div className="col-sm-12 col-md-8 p-4 bg-light">
    <div className="container p-2 bg-light">
      <Board xIsNext={xIsNext} squares={history[currentMove]} onPlay={handlePlay} />
</div>
  </div>
  <div className="col-sm-12 col-md-4 p-4 bg-light  d-flex" style={{height: "490px"}}>
    <div className="container p-2 "><ol className="p-2 border-0">
 {moves} 
      </ol>
    </div>
    <div className="container p-3 ">
       <button className="reset-btn btn btn-primary" onClick={handleReset}> Reset Game </button> 
       </div>
  </div>
</div>
</div>
)}


