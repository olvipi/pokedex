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

  return (
    <div className="d-flex justify-content-around mt-2 ">
      <span className="arrow-prev align-self-center ml-5" onClick={onDecrease}>
        Prev
      </span>
      <div className="text-center">
        {firstItem} - {lastItem}
        <br />
        Pokemons
        <br />
        of {props.end}
      </div>
      <span className="arrow-next align-self-center mr-5" onClick={onIncrease}>
        Next
      </span>
    </div>
  );
}
