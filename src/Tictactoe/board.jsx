import React from "react";
import Square from "./square";
import { useState } from "react";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXturn, setXturn] = useState(true);
  const winnerLogic = () => {
    const winnerstate = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
    ];
    for (let logic of winnerstate) {
      var [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }

    return false;
  };
  const isWinner = winnerLogic();

  const handleClick = (i) => {
    if (!state[i]) {
      const copyState = [...state];
      copyState[i] = isXturn ? "X" : "O";
      setState(copyState);
      setXturn(!isXturn);
    }
  };
  const handelClick1 = () => {
    setState(Array(9).fill(null));
  };

  return (
    <>
      {isWinner ? (
        <>
          {isWinner} won the game{" "}
          <button onClick={handelClick1}>Play again</button>
        </>
      ) : (
        <>
          <h4>now player {isXturn ? "X" : "O"}'s turn</h4>
          <div className="board_container">
            <div className="board-row">
              <Square value={state[0]} onClick={() => handleClick(0)} />
              <Square value={state[1]} onClick={() => handleClick(1)} />
              <Square value={state[2]} onClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
              <Square value={state[3]} onClick={() => handleClick(3)} />
              <Square value={state[4]} onClick={() => handleClick(4)} />
              <Square value={state[5]} onClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
              <Square value={state[6]} onClick={() => handleClick(6)} />
              <Square value={state[7]} onClick={() => handleClick(7)} />
              <Square value={state[8]} onClick={() => handleClick(8)} />
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Board;
