import { useState } from "react";
import "./Counter.css";

const Counter = () => {
  let [counter, setCounter] = useState(0);

  return (
    <section className="counter">
      <div>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <p>{counter}</p>
        <button onClick={() => setCounter(counter - 1)}>-</button>
      </div>
      <button onClick={() => setCounter((counter = 0))}>Reset</button>
    </section>
  );
};

export default Counter;
