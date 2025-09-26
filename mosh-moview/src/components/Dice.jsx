import React from "react";

export default function Dice(props) {
  return (
    <div className="dice">
      <button
        style={{ backgroundColor: props.isHeld ? "lightgreen" : "red" }}
        onClick={props.hold}
      >
        {props.value}
      </button>
    </div>
  );
}
