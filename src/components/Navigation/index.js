import React from "react";
import "./style.css";

export default function Navigation(props) {
  const onIncrease = props.onIncrease;
  const onDecrease = props.onDecrease;
  const firstItem = props.firstItem + 1;
  let lastItem = props.firstItem + props.limit;
  if (lastItem > props.end) {
    lastItem = props.end;
  }
  //Different variables for empty search
  const textTrue = {
    start: `${firstItem} - ${lastItem}`,
    end: `of ${props.end}`
  };
  const textFalse = { start: "There are no", end: "for display" };

  return (
    <div className="d-flex justify-content-around mt-2">
      <span className="arrow-prev align-self-center ml-5" onClick={onDecrease}>
        Prev
      </span>
      <div
        className="text-center"
        style={props.end === 0 ? { color: "red" } : { color: "black" }}
      >
        {props.end === 0 ? textFalse.start : textTrue.start}
        <br />
        Pokemon{props.end === 1 ? (``) : (`s`)}
        <br />
        {props.end === 0 ? textFalse.end : textTrue.end}
      </div>
      <span className="arrow-next align-self-center mr-5" onClick={onIncrease}>
        Next
      </span>
    </div>
  );
}
