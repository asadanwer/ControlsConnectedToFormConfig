import React, { useRef } from "react";

export const Ref = () => {
  const nameRf = useRef(null);
  const handleClick = () => {
    console.log(nameRf.current.value);
  };
  return (
    <div>
      <center>
        {/* <h1>hi,{nameRf.current.value}</h1> */}
        <input type="text" placeholder="please enter" ref={nameRf} />
        <button onClick={handleClick}>GetValue from input</button>
      </center>
    </div>
  );
};
