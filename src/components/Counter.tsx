import React, { useState } from "react";
import classes from "./Counter.module.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const clickHandler = () => {
    setCount((state) => ++state);
  };

  return (
    <div>
      <h1 className={classes.btn}>{count}</h1>
      <button onClick={clickHandler}>increment</button>
    </div>
  );
};
