import React, { useState } from "react";

export default function Easy() {
  const [count, setCount] = useState(0);
  return (
    <div className="easy-container">
      <div className="total-container">
        <p className="total">Total: {count}</p>
        <div className="buttons-container">
          <button
            className="button increment"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
          <button
            className="button decrement"
            onClick={() => setCount(count - 1)}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}
