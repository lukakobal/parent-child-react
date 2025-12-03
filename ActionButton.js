import React from "react";

export default function ActionButton({ onIncrement }) {
  return (
    <button className="btn" onClick={onIncrement}>
      Click me🚀
    </button>
  );
}
