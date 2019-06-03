import React from "react";

export default function Search(props) {
  function onSubmit(e) {
    e.preventDefault();
  }

  const onChangeInput = e => {
    props.onChangeInput(e.target.value);
  };

  return (
    <form className="mt-3" onSubmit={onSubmit}>
      <label htmlFor="search">Enter the Pokemon name for the search</label>
      <input
        type="text"
        id="search"
        placeholder="Pokemon"
        className="form-control"
        onChange={onChangeInput}
      />
    </form>
  );
}
