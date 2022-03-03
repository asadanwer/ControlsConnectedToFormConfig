import React, { useReducer } from "react";
const reducer = (initialState, action) => {
  switch (action.type) {
    case "INCREASE":
      return {
        count: initialState.count + 1,
        showText: !initialState.showText,
      };
    default:
      return initialState;
  }
};
const Reducer = () => {
  const [initialState, dispatch] = useReducer(reducer, {
    count: 0,
    showText: false,
  });
  const handleClick = () => {
    dispatch({ type: "INCREASE" });
  };
  return (
    <div>
      <center>
        <h1>Hi,{initialState.count}</h1>
        <button onClick={handleClick}>Increase</button>
        {initialState.showText && <h3>This is showText</h3>}
      </center>
    </div>
  );
};

export default Reducer;
