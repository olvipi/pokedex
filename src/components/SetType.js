import React from "react";

export default function SetType(props) {
  const onHandleSubmit = e => {
    e.preventDefault();
  };

  const onSetTypes = e => {
    props.onSetType(e.target);
  };

  return (
    <div className="card mt-3">
      <div className="card-header">Filter by types</div>
      <div className="card-body">
        <form onSubmit={onHandleSubmit}>
          {props.types.map(type => (
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
