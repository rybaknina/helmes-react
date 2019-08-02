import React from "react";
import PropTypes from "prop-types";
function Input(props) {
  return (
    <>
      <div className="form-group">
        {props.showLbel && <label htmlFor={props.id}>{props.label}</label>}
        <br />
        <input className="form-control"
          type="text"
          id={props.id}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
        />
      </div>
      {props.error && <div>{props.error}</div>}
    </>
  );
}
Input.defaultProps={
  showLabel:true
};

Input.propTypes = {
  /** The inputs element ID */
  id: PropTypes.string.isRequired,
  /** The inputs element label */
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  showLabel: PropTypes.bool
}
export default Input;