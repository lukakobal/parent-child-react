import React from "react";
import ActionButton from "./ActionButton";

export default function InfoSection({ onIncrement }) {
  return (
    <div className="info-box">
      <h2>Child Component</h2>
      <ActionButton onIncrement={onIncrement} />
    </div>
  );
}

