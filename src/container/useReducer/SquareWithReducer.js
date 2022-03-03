import React, { useReducer } from "react";

const SquareWithReducer = () => {
  const actions = (initialState, action) => {
    switch (action.type) {
      case "square":
        return {
          count: initialState.count * initialState.count,
          showText: !initialState.showText,
        };
      default:
        return initialState;
    }
  };
  const [initialState, dispatch] = useReducer(actions, {
    count: 2,
    showText: false,
  });
  const handleSquare = () => {
    dispatch({ type: "square" });
  };
  return (
    <div>
      <center>
        <h1>hi,{initialState.count}</h1>
        <button onClick={handleSquare}>Square</button>
        <h2>Double me</h2>
      </center>
    </div>
  );
};

export default SquareWithReducer;
