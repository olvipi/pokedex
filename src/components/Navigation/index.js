import React from "react";
import "./style.css";

export default function Navigation(props) {
  const onSetOffsetIncrease = props.onSetOffsetIncrease;
  const onSetOffsetDecrease = props.onSetOffsetDecrease;
  const firstItem = props.firstItem + 1;
  let lastItem = props.firstItem + props.lastItem;
  if (lastItem > 964) {
    lastItem = 964;
  }

  return (
    <div className="d-flex justify-content-around mt-2 ">
      <span
        className="arrow-prev align-self-center ml-5"
        onClick={onSetOffsetDecrease}
      >
        Prev
      </span>
      <div className="text-center">
        {firstItem} - {lastItem}
        <br />
        Pokemons
        <br />
        of 964
      </div>
      <span
        className="arrow-next align-self-center mr-5"
        onClick={onSetOffsetIncrease}
      >
        Next
      </span>
    </div>
  );
}
