import React, { useReducer } from "react";

const AnotherPractice = () => {
  const actions = (initialState, action) => {
    switch (action.type) {
      case "decrease":
        return {
          count: initialState.count - 1,
          showText: !initialState.showText,
        };
      default:
        return { initialState };
    }
  };
  const [initialState, dispatch] = useReducer(actions, {
    count: 0,
    showText: false,
  });
  const handleClick = () => {
    dispatch({ type: "decrease" });
  };
  return (
    <div>
      <center>
        <h1>hi,{initialState.count}</h1>
        <button onClick={handleClick}>decrease</button>
        {initialState.showText && <h2>Conditional Rendering</h2>}
      </center>
    </div>
  );
};

export default AnotherPractice;
