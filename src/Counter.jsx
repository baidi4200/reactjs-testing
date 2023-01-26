import React from "react";

export default function Counter() {
  const [counter, setCounter] = React.useState(0);
  const [inputValue, setInputValue] = React.useState(1);
  const increment = () => setCounter(counter + inputValue);
  const decrement = () => setCounter(counter - inputValue);
  return (
    <div>
      <h1 data-testid="header">My Counter</h1>
      <h2
        data-testid="counter"
        className={`${counter <= 100 ? "green" : ""} ${
          counter <= -100 ? "red" : ""
        }`}
      >
        {counter}
      </h2>
      <button
        data-testid="subtract-btn"
        className="button-74"
        onClick={decrement}
      >
        -
      </button>
      <input
        data-testid="input"
        type="number"
        value={inputValue}
        onChange={(e) => {
          setInputValue(parseInt(e.target.value));
        }}
      />
      <button data-testid="add-btn" className="button-74" onClick={increment}>
        +
      </button>
    </div>
  );
}
