import React, { Component } from "react";
import "./Input.css";

class Input extends Component {
  render() {
    const { name, type, value, placeholder, onChange, error } = this.props;

    return (
      <div>
        <label htmlFor={name}></label>
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />

        {error && <p className="error">{error}</p>}
      </div>
    );
  }
}

export default Input;
