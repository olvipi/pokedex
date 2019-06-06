import React from "react";

export default function SetType(props) {
  const types = [
    "normal",
    "fighting",
    "flying",
    "poison",
    "ground",
    "rock",
    "bug",
    "ghost",
    "steel",
    "fire",
    "water",
    "grass",
    "electric",
    "psychic",
    "ice",
    "dragon",
    "dark",
    "fairy"
  ];

  const onHandleSubmit = e => {
    e.preventDefault();
  };

  const onSetTypes = e => {
    const target = e.target;
    console.log(target.name);
    console.log(target.checked);
    props.onSetType(target);
  };


  return (
    <div className="card mt-3">
      <div className="card-header">Filter by types</div>
      <div className="card-body">
        <form onSubmit={onHandleSubmit}>
          {types.map(type => (
            <div key={type} className="custom-control custom-checkbox badge-pill mb-1 text-white" style={{
              backgroundColor: `${props.colors[type]}`
            }}>
              <input
                type="checkbox"
                className="custom-control-input"
                id={type}
                name={type}
                onChange={onSetTypes}
              />
              <label
                className="custom-control-label text-capitalize"
                htmlFor={type}
              >
                {type}
              </label>
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};
