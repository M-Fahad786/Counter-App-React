import { useState } from "react";
import "./App.css";

const Counter = () => {
  const [num, setNum] = useState(0);
  return (
    <div className="main">
      <div className="header">
        <h1>Counter App </h1>
      </div>
      <div className="number">
        <h1>{num}</h1>
      </div>
      <div className="buttons">
        <button
          onClick={() => {
            setNum(0);
          }}
        >
          Reset
        </button>
        <button
          onClick={() => {
            setNum(num - 1);
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            setNum(num + 1);
          }}
        >
          Increment
        </button>
      </div>
    </div>
  );
};


export default Counter;
