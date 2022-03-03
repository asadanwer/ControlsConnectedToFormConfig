import React, { useEffect, useLayoutEffect } from "react";

const LayoutEffect = () => {
  useEffect(() => {
    console.log("useEffect");
  }, []);
  useLayoutEffect(() => {
    console.log("useLayoutEffect");
  }, []);
  return <div>LayoutEffect</div>;
};

export default LayoutEffect;
